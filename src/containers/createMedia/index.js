import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateMedia from './createMedia';
import { getMediaListAutoComplete, findJournalist, getMediaList } from '../../redux/actions/pitches';
import { getUserById } from '../../redux/actions/user';
import CusModal from '../../components/modal';
import Loader from '../../components/loader';
import { getJournalists } from '../../redux/actions/journalist';
import { updateMediaById, createMedia } from '../../redux/actions/media';
import HELPER from '../../utils/helper';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: true,
			listName: '',
			journalistValue: '',
			isMediaListOpen: false,
			error: {},
			selectedJournalists: [],
			selectAll: false,
			id: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { mediaList: { data = [] }, location: { search } } = props;
		if (search && !state.listName && Array.isArray(data)) {
			const id = search.split('=')[1];
			const isExist = data.filter(item => item.id === parseInt(id, 10)) || [];
			if (isExist.length) {
				return { listName: isExist[0].name };
			}
		}
		return null;
	}

	componentDidMount() {
		const {
			getJournalists, journalists, location: { search }, getMediaList,
		} = this.props;
		if (!journalists.code) {
			getJournalists();
		}
		if (search) {
			getMediaList();
			this.setState({ id: search.split('=')[1], isOpen: false });
		}
	}

	onChange = (e) => {
		const listName = e.target.value;
		this.setState({ listName, error: {} });
		this.filterMedia(listName);
	};

	filterMedia = (value) => {
		const { getMediaListAutoComplete } = this.props;
		if (value && value !== '') {
			getMediaListAutoComplete(value);
		}
	};

	checkListExist = (e) => {
		e.preventDefault();
		const { mediaList: { data }, getMediaList } = this.props;
		const { listName } = this.state;
		if (Array.isArray(data) && data.length > 0) {
			this.setState({ error: { media: ['Alreay Exist!'] } });
		} else if (listName !== '') {
			this.setState({ isOpen: false });
			getMediaList();
		}
	};

	createMedia = () => {
		const { createMedia, journalists } = this.props;
		const { selectedJournalists, listName } = this.state;
		const journalistsList = [];
		selectedJournalists.map((id) => {
			const isExist =	Array.isArray(journalists.data) && journalists.data.filter(
				journalist => journalist.id === id,
			);
			if (isExist.length) {
				journalistsList.push(isExist[0].url);
			}
			return true;
		});

		const obj = {
			name: listName,
			journalists: journalistsList,
		};
		createMedia(obj);
	};

	filterJournalists = (e) => {
		const { getJournalistAutoComplete, getJournalists } = this.props;
		const value = e.target.value;
		if (value && value !== '') {
			getJournalistAutoComplete(value);
		} else {
			getJournalists();
		}
		this.setState({ journalistValue: value, selectAll: false, selectedJournalists: [] });
	};

	addJournalistInMediaList = (id) => {
		const { mediaList: { data = [] }, updateMediaById, journalists } = this.props;
		const { selectedJournalists } = this.state;
		let journalistsList = [];
		selectedJournalists.map((id) => {
			const isExist =				Array.isArray(journalists.data) && journalists.data.filter(
				journalist => journalist.id === id,
			);
			if (isExist.length) {
				journalistsList.push(isExist[0].url);
			}
			return true;
		});
		const selectedMedia = data.filter(item => item.id === id);
		journalistsList = [...selectedMedia[0].journalists, ...journalistsList];
		journalistsList = journalistsList.filter((value, index, self) => self.indexOf(value) === index);
		if (selectedMedia.length) {
			const obj = {
				id,
				journalists: journalistsList,
			};
			this.setState({ selectedJournalists: [], selectAll: false });
			updateMediaById(obj);
		}
	};

	onMediaListButtonClick = () => {
		const { isMediaListOpen } = this.state;
		this.setState({ isMediaListOpen: !isMediaListOpen });
	};

	onJournalistSelection = (id) => {
		let { selectedJournalists } = this.state;
		const isExist = selectedJournalists.filter(item => item === id);
		if (isExist.length > 0) {
			selectedJournalists = selectedJournalists.filter(item => item !== isExist[0]);
		} else {
			selectedJournalists = selectedJournalists.concat(id);
		}
		this.setState({ selectedJournalists, selectAll: false });
	};

	selectAllJournalist = () => {
		let { selectedJournalists, selectAll } = this.state;
		const { journalists: { data = [] } } = this.props;
		if (selectAll) {
			selectedJournalists = [];
			selectAll = false;
		} else {
			selectedJournalists = data.map(journalist => journalist.id);
			selectAll = true;
		}
		this.setState({ selectedJournalists, selectAll });
	};

	removeJournalistFromMedia = () => {
		const { mediaList: { data = [] }, updateMediaById } = this.props;
		const { selectedJournalists, id } = this.state;
		const journalistsList = [];
		let mediaJournalists = [];
		const selectedJournalistList = Array.isArray(data) && data.filter(
			item => item.id === parseInt(id, 10),
		);
		if (selectedJournalistList.length) {
			mediaJournalists = selectedJournalistList[0].journalistsData;
		}
		const mediaJournalistByIds = mediaJournalists.map(journalist => journalist.id);
		const selectedJournalistsToDelete = HELPER.outerJoinInLeftArray(
			mediaJournalistByIds, selectedJournalists,
		);
		selectedJournalistsToDelete.map((id) => {
			const isExist =	Array.isArray(mediaJournalists)
        && mediaJournalists.filter(journalist => journalist.id === id);
			if (isExist.length) {
				journalistsList.push(isExist[0].url);
			}
			return true;
		});
		const obj = {
			id,
			journalists: journalistsList,
		};
		this.setState({ selectedJournalists: [], selectAll: false });
		updateMediaById(obj);
	};

	render() {
		const { journalists: { isLoading } } = this.props;
		const { listName, isOpen, error } = this.state;

		return (
			<Loader isLoading={isLoading || false}>
				<CreateMedia
					{...this.props}
					{...this.state}
					filterJournalists={this.filterJournalists}
					addJournalistInMediaList={this.addJournalistInMediaList}
					onMediaListButtonClick={this.onMediaListButtonClick}
					onJournalistSelection={this.onJournalistSelection}
					selectAllJournalist={this.selectAllJournalist}
					saveInMediaList={this.createMedia}
					removeJournalistFromMedia={this.removeJournalistFromMedia}
				/>
				<CusModal isOpen={isOpen}>
					<form onSubmit={this.checkListExist} className="media_box">
						<div>
							<label htmlFor="media">List Name </label>
							<input name="media" value={listName} onChange={this.onChange} />
						</div>
						{Array.isArray(error.media) && error.media.map(msg => <p style={{ color: 'red' }}>{msg}</p>)}
						<button className="new_pitch_btn" type="submit">
							Submit
						</button>
					</form>
				</CusModal>
			</Loader>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getMediaListAutoComplete: data => getMediaListAutoComplete(data),
		getUserByUserId: data => getUserById(data),
		getMediaList: data => getMediaList(data),
		getJournalists: data => getJournalists(data),
		getJournalistAutoComplete: data => findJournalist(data),
		updateMediaById: data => updateMediaById(data),
		createMedia: data => createMedia(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
