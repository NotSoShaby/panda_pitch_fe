import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import { getUserById } from '../../redux/actions/user';
import { getMediaList } from '../../redux/actions/pitches';
import { updateMediaById } from '../../redux/actions/media';
import Loader from '../../components/loader';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: false };
	}

	componentDidMount() {
		const {
			getUserByUserId, getMediaList, mediaList,
			history: { location: { search } }, profile: { data },
		} = this.props;
		const id = search.split('=')[1];
		if (id) {
			getUserByUserId(id);
		} else if (data.id) {
			getUserByUserId(data.id);
		}
		if (!mediaList.code || mediaList.code !== 'SUCCESS') {
			getMediaList();
		}
	}

	onMediaListButtonClick = () => {
		const { isVisible } = this.state;
		this.setState({ isVisible: !isVisible });
	};

	addUserInMediaList = (id) => {
		const {
			mediaList: { data = [] },
			updateMediaById, getUserById: { data: { url } },
		} = this.props;
		const selectedMedia = data.filter(item => item.id === id);
		if (selectedMedia) {
			updateMediaById({ id, journalists: [...selectedMedia[0].journalists, url] });
		}
	};

	render() {
		const { getUserById: { isLoading } } = this.props;
		return (
			<Loader isLoading={isLoading}>
				<Profile
					{...this.props}
					{...this.state}
					onMediaListButtonClick={this.onMediaListButtonClick}
					addUserInMediaList={this.addUserInMediaList}
				/>
			</Loader>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getUserByUserId: data => getUserById(data),
		getMediaList: data => getMediaList(data),
		updateMediaById: data => updateMediaById(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
