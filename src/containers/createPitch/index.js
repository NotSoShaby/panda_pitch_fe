/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from '../../components/loader';
import Authorized from '../../routes/authorized';
import CreatePitch from './createPitch';
import { findJournalist, getMediaList } from '../../redux/actions/pitches';
import { getJournalistInterests, createInterest } from '../../redux/actions/signup';
import { createClient } from '../../redux/actions/clients';
import Personalization from './personalize';
import FinalizePitch from './finalize';

// import UnAuthorized from '../../routes/unAuthorized';
// import HELPER from '../../utils/helper';

class Index extends Authorized {
	state = {
		hideNewClientDiv: true,
		progressValue: 0,
		newClient: { name: '', website: '', image: null },
		pressReleaseImage: '',
		steps: 3,
		active: 1,
		selectedMediaList: [],
		name: '',
		value: '',
		searchString: '',
		selectedClients: [],
		allInterests: [],
		journalists: [{ id: 1, name: 'shhh koi h' }, { id: 2, name: 'chal be' }, { id: 3, name: 'koi nhi hai' }],
		selectedJournalists: [],
		mediaFiles: ['', '', ''],
	}

	// componentDidMount() {
	// 	const { mediaList } = this.props;
	// 	mediaList();
	// }

	changeInput = (value) => {
		console.log('input', value);
	}

	onChangeSelect = (value) => {
		console.log('select', value);
	}

	onChangeSelect = (selectedValue) => {
		this.setState({ value: selectedValue.value });
	}

	handlePrSelect = ({ id }) => {
		const { journalists: { data } } = this.props;
		const { selectedJournalists } = this.state;
		const journalistSelected = _.find(selectedJournalists, o => o.id === id);
		if (!journalistSelected) {
			const selectedJR = _.find(data, o => o.id === id);
			this.setState({ selectedJournalists: [...selectedJournalists, selectedJR] });
		}
	}

	setSearchValue = (searchString) => {
		const { findJournalist } = this.props;
		findJournalist(searchString);
		this.setState({ searchString, selectedClients: [] });
	}

	handleJournalistMessageChange = (e, id) => {
		let { selectedJournalists } = this.state;
		if (selectedJournalists[id]) {
			selectedJournalists[id].personalMessage = e.target.value;
		} else {
			selectedJournalists = this.getSelectedJR();
			selectedJournalists[id].personalMessage = e.target.value;
		}
		this.setState({ selectedJournalists });
	}

	handleNextScreen = () => {
		const { active } = this.state;
		this.setState({ active: active + 1 });
	}

	handlePreviousScreen = () => {
		const { active } = this.state;
		this.setState({ active: active - 1 });
	}

	handleClient = (client) => {
		// if (_.findLastIndex(selectedClients, client) === -1) {
		// 	selectedClients.push(client);
		// }
		this.setState({ selectedClients: [client] });
	};

	handleAddProfile = () => {
	};

	handleAddTopics = () => {
	};

	handleAddMedia = (index, image) => {
		const { mediaFiles } = this.state;
		mediaFiles[index] = URL.createObjectURL(image);
		this.setState({ mediaFiles });
	};

	handleRemoveMedia = (index) => {
		const { mediaFiles } = this.state;
		mediaFiles[index] = '';
		this.setState({ mediaFiles });
	};

	handleAddNewClient = () => {
		const { hideNewClientDiv } = this.state;
		this.setState({ hideNewClientDiv: !hideNewClientDiv });
	}

	handleInputText = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		if (e.target.name === 'headline') {
			if (e.target.value.length > 50) {
				e.target.value = '';
			}
		}
	}

	handleRangeChange = (value) => {
		this.setState({ progressValue: value.value });
	}

	handleAddPressRelease = (e) => {
		if (e && e.target.files) {
			const pressReleaseImage = URL.createObjectURL(e.target.files[0]);
			this.setState({ pressReleaseImage });
		}
	}

	handlePrivate = e => console.log(e.target.checked);

	handleInterestSelection = (allInterests) => {
		this.setState({ allInterests });
	}

	// create a new interest
	createInterest = (val) => {
		const { createInterest } = this.props;
		createInterest(val);
	};

	handleClientPropertyChange = (name, value) => {
		const { newClient } = this.state;
		newClient[name] = value;
		this.setState({ newClient });
	}

	// create a new interest
	createClient = () => {
		const { newClient } = this.state;
		const { name, website, image } = newClient;
		if (!name) return;
		const { createClient } = this.props;
		const formData = new FormData();
		formData.append('name', name);
		formData.append('website', website);
		formData.append('image', image);
		// const blob = new Blob(newClient.image, { type: 'application/json' });
		createClient(formData);
	};

  getJRMediaList = (val) => {
  	const { getMediaList } = this.props;
  	getMediaList(val);
  }

  onSelectMediaList = (list) => {
  	this.setState({ selectedMediaList: list, selectedJournalists: this.getSelectedJR(list) });
  }

  getFilteredJR = () => {
  	const { journalists: { data } } = this.props;
  	if (Array.isArray(data)) {
  		return data.map(item => ({ ...item, name: item.full_name }));
  	}
  	return [];
  }

  getSelectedJR = (selectedMediaList) => {
  	const selectedJournalists = [];
  	const map = new Map();
  	if (selectedMediaList) {
  		selectedMediaList.map((item) => {
  			if (item.isActive === true) {
  				return item.journalists_data.map((jrData) => {
  					if (!map.has(jrData.id)) {
  						map.set(jrData.id, true);
  						selectedJournalists.push({ ...jrData, name: jrData.full_name });
  					}
  					return true;
  				});
  			}
  			return true;
  		});
  	}
  	return selectedJournalists;
  }

	displayScreen = () => {
		const { active, steps } = this.state;
		let render;
		if (active === 1) {
			render = (
				<Loader
					isLoading={
						false
					}
				>
					<CreatePitch
						{...this.state}
						{...this.props}
						steps={3}
						active={1}
						handleClient={this.handleClient}
						handleAddNewClient={this.handleAddNewClient}
						handleAddProfile={this.handleAddProfile}
						handleAddTopics={this.handleAddTopics}
						handleAddMedia={this.handleAddMedia}
						handleAddPressRelease={this.handleAddPressRelease}
						handleInputText={this.handleInputText}
						onRangeChange={this.handleRangeChange}
						changeNextScreen={this.handleNextScreen}
						setSearchValue={this.setSearchValue}
						handlePrSelect={this.handlePrSelect}
						handlePrivate={this.handlePrivate}
						handleRemoveMedia={this.handleRemoveMedia}
						changeInput={this.changeInput}
						onSelectInterest={this.handleInterestSelection}
						onChangeSelect={this.onChangeSelect}
						onCreateInterest={this.createInterest}
						createClient={this.createClient}
						onChangeClientProperty={this.handleClientPropertyChange}
					/>
				</Loader>
			);
		}
		if (active === 2) {
			render = (
				<Personalization
					{...this.state}
					{...this.props}
					journalists={this.getFilteredJR()}
					onSelectMediaList={this.onSelectMediaList}
					getJRMediaList={this.getJRMediaList}
					onChangeSelect={this.onChangeSelect}
					handlePrSelect={this.handlePrSelect}
					setSearchValue={this.setSearchValue}
					addMessageForJournalist={this.handleJournalistMessageChange}
					changeNextScreen={this.handleNextScreen}
					changeToPreviousScreen={this.handlePreviousScreen}
				/>
			);
		}
		if (active === 3) {
			render = (
				<FinalizePitch
					active={active}
					steps={steps}
					{...this.state}
					changeToPreviousScreen={this.handlePreviousScreen}
				/>
			);
		}
		return render;
	}

	render() {
		return (<>{this.displayScreen()}</>);
	}
}


const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		findJournalist: data => findJournalist(data),
		createClient: data => createClient(data),
		getMediaList: data => getMediaList(data),
		getJournalistInterests: data => getJournalistInterests(data),
		createInterest: data => createInterest(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
