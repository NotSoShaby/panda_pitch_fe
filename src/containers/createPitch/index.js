/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from '../../components/loader';
import Authorized from '../../routes/authorized';
import CreatePitch from './createPitch';
import {
	getClientsAuto, findJournalist, getMediaList, removeJournalist,
} from '../../redux/actions/pitches';
import { getJournalistInterests, createInterest } from '../../redux/actions/signup';
import { createClient } from '../../redux/actions/clients';
import { createPitchActionForm1, createPitchActionForm2, createPitchActionForm3 } from '../../redux/actions/pitch';
import Personalization from './personalize';
import FinalizePitch from './finalize';

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
		selectedClient: {},
		allInterests: [],
		journalists: [{ id: 1, name: 'shhh koi h' }, { id: 2, name: 'chal be' }, { id: 3, name: 'koi nhi hai' }],
		selectedJournalists: [],
		mediaFiles: ['', '', ''],
		MediaImages: ['', '', ''],
		cta: [],
		title: '',
		is_private: false,
		press_release: '',
		saveAndNext: false,
		selectedForm: 1,
	}

	componentWillReceiveProps(nextProps) {
		const { createPitchReducer, createClientReducer } = nextProps;
		const { props } = this;
		if (createClientReducer !== props.createClientReducer) {
			const { data, error } = createClientReducer;
			if (data && (typeof data === 'object') && Object.keys(data).length) {
				this.setState({ hideNewClientDiv: true, newClient: {} });
			} else if (error) {
				// console.log('createClientReducer.error show toster', error);
			}
		}
		// if (createPitchReducer !== props.createPitchReducer) {
		const {
			data, form1, form2,
		} = createPitchReducer;
		const { selectedForm } = this.state;
		if (data && (typeof data === 'object')) {
			if (form1 && selectedForm === 2) {
				this.setState({ active: 2 });
			} else if (form2 && selectedForm === 3) {
				this.setState({ active: 3 });
			}
			this.setState({ saveAndNext: false });
		}
	}

	// handle a specialized journalist selection
	handlePrSelect = ({ id }) => {
		const { journalists: { data } } = this.props;
		const { selectedJournalists } = this.state;
		const journalistSelected = _.find(selectedJournalists, o => o.id === id);
		if (!journalistSelected) {
			const selectedJR = _.find(data, o => o.id === id);
			this.setState({ selectedJournalists: [...selectedJournalists, selectedJR] });
		}
	}

	// return filtered clients
	setSearchValue = (searchString) => {
		const { findJournalist } = this.props;
		findJournalist(searchString);
		this.setState({ searchString });
	}

  // return filtered clients
  filterClients = (searchString) => {
  	const { getClientsAuto } = this.props;
  	getClientsAuto(searchString);
  	this.setState({ searchString, selectedClient: {} });
  }

  // add a personalized message for journalist
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

  savePersonalizeData = async () => {
  	const { active, selectedJournalists } = this.state;
  	if (active === 2) {
  		const { createPitchActionForm2, createPitchReducer: { form1: { url } } } = this.props;
  		const data = selectedJournalists.map(journalist => ({
  			message_to: journalist.url,
  			pitch: url,
  			message: journalist.personalMessage,
  		}));
  		if (data) { this.setState({ active: active + 1 }); }
  		createPitchActionForm2(data);
  	}
  }

  finalSubmission = async () => {
  	const { active } = this.state;
  	if (active === 3) {
  		const { createPitchReducer: { form1 }, createPitchActionForm3 } = this.props;
  		if (form1) {
  			const { url } = form1;
  			const user = url.split('/');
  			createPitchActionForm3(user[5]);
  		}
  	}
  }

  // redirect to next form
	handleNextScreen = () => {
		const { active } = this.state;
		if (active === 1) {
			this.saveScreenData();
			this.setState({ saveAndNext: true, selectedForm: 2 });
		} else if (active === 2) {
			this.savePersonalizeData();
			this.setState({ saveAndNext: true, selectedForm: 3 });
		} else if (active === 3) {
			this.finalSubmission();
		}
	}

	availabilityType = () => {
		const { progressValue } = this.state;
		switch (progressValue) {
			case 20:
				return 'exclusive';
			case 10:
				return 'embargo';
			default:
				return 'regular';
		}
	}

	createPitchData = async () => {
		const {
			MediaImages, selectedClient, press_release, cta, title, allInterests, is_private, content,
		} = this.state;
		const form_data = new FormData();
		form_data.append('press_release', press_release);
		await MediaImages.map((data) => {
			if (data) {
				form_data.append('images', data);
			}
			return null;
		});
		form_data.append('title', title);
		form_data.append('client', selectedClient.url);
		form_data.append('is_public', !(is_private === 'on'));
		await allInterests.map((data) => {
			if (data.isActive) {
				form_data.append('topics', data.url);
			}
			return null;
		});
		await cta.map((data) => {
			if (data.isActive) {
				form_data.append('cta', data.apiValue);
			}
			return null;
		});
		form_data.append('content', content);
		form_data.append('availability', this.availabilityType());
		return form_data;
	}

	// save create pitch form (form 1)
	saveScreenData = async () => {
		const { active } = this.state;
		if (active === 1) {
			const { createPitchActionForm1 } = this.props;
			const DATA = await this.createPitchData();
			createPitchActionForm1(DATA);
		}
	}

	// redirect to previous screen
	handlePreviousScreen = () => {
		const { active, selectedForm } = this.state;
		this.setState({ active: active - 1, selectedForm: selectedForm - 1 });
	}

	// handle client search box
	handleClient = (client) => {
		this.setState({ selectedClient: client });
	};

	// handle media input
	handleAddMedia = (index, image) => {
		const { mediaFiles, MediaImages } = this.state;
		mediaFiles[index] = URL.createObjectURL(image);
		MediaImages[index] = image;
		this.setState({ mediaFiles, MediaImages });
	};

	// remove selected media
	handleRemoveMedia = (index) => {
		const { mediaFiles, MediaImages } = this.state;
		mediaFiles[index] = '';
		MediaImages[index] = '';
		this.setState({ mediaFiles, MediaImages });
	};

	// add a new client
	handleAddNewClient = () => {
		const { hideNewClientDiv } = this.state;
		this.setState({ hideNewClientDiv: !hideNewClientDiv });
	}

	// handle range selection
	handleRangeChange = (value) => {
		this.setState({ progressValue: value.value });
	}

	// handle press release
	handleAddPressRelease = (e) => {
		if (e && e.target.files) {
			const pressReleaseImage = URL.createObjectURL(e.target.files[0]);
			this.setState({ pressReleaseImage, press_release: e.target.files[0] });
		}
	}

	// handle selected topic
	handleInterestSelection = (allInterests) => {
		this.setState({ allInterests });
	}

	// handle client form input
	handleClientPropertyChange = (name, value) => {
		const { newClient } = this.state;
		newClient[name] = value;
		this.setState({ newClient });
	}

	// handle CTA selection
	onCTASelection = (data) => {
		this.setState({ cta: data });
	}

	// handle create pitch form input fields
	onChangeState = (event) => {
		if (event.target.name === 'is_private') {
			const { is_private } = this.state;
			this.setState({ [event.target.name]: !is_private });
		} else this.setState({ [event.target.name]: event.target.value });
	}

	// handle tiny-input change
	onChangeContent = (value) => {
		this.setState({ content: value.level.content });
	}

	// create a new client
	createClient = () => {
		const { newClient } = this.state;
		const { name, website, image } = newClient;
		if (!name) return;
		const { createClient } = this.props;
		const formData = new FormData();
		formData.append('name', name);
		formData.append('website', website);
		formData.append('image', image);
		createClient(formData);
	};

  // return filter media list
  getJRMediaList = (val) => {
  	const { getMediaList } = this.props;
  	getMediaList(val);
  }

  // handle media-list selection
  onSelectMediaList = (list) => {
  	this.setState({ selectedMediaList: list, selectedJournalists: this.getSelectedJR(list) });
  }

  // return selected journalists
  getFilteredJR = () => {
  	const { journalists: { data } } = this.props;
  	if (Array.isArray(data)) {
  		return data.map(item => ({ ...item, name: item.full_name }));
  	}
  	return [];
  }

  // handle new selected journalist and put in list
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

  removeJournalist = async (index) => {
  	const { selectedJournalists } = this.state;
  	const { createPitchReducer: { form2 } } = this.props;
  	const user = _.find(form2, o => o.message === selectedJournalists[index].personalMessage);
  	const url = user.url.split('/');
  	if (removeJournalist(url[5])) {
  	selectedJournalists.splice(index, 1);
  		this.setState({ selectedJournalists });
  	}
  }

  // return conditional form rendering
	displayScreen = () => {
		const { active } = this.state;
		const { createInterest } = this.props;
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
						handleClient={this.handleClient}
						handleAddNewClient={this.handleAddNewClient}
						handleAddMedia={this.handleAddMedia}
						handleAddPressRelease={this.handleAddPressRelease}
						onRangeChange={this.handleRangeChange}
						changeNextScreen={this.handleNextScreen}
						saveScreenData={this.saveScreenData}
						setSearchValue={this.filterClients}
						handleRemoveMedia={this.handleRemoveMedia}
						onSelectInterest={this.handleInterestSelection}
						onCreateInterest={val => createInterest(val)}
						createClient={this.createClient}
						onChangeClientProperty={this.handleClientPropertyChange}
						onCTASelection={this.onCTASelection}
						onChangeState={this.onChangeState}
						onChangeContent={this.onChangeContent}
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
					handlePrSelect={this.handlePrSelect}
					setSearchValue={this.setSearchValue}
					addMessageForJournalist={this.handleJournalistMessageChange}
					changeNextScreen={this.handleNextScreen}
					savePersonalizeData={this.savePersonalizeData}
					changeToPreviousScreen={this.handlePreviousScreen}
				/>
			);
		}
		if (active === 3) {
			render = (
				<FinalizePitch
					{...this.state}
					removeJournalist={this.removeJournalist}
					changeNextScreen={this.handleNextScreen}
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
		getClientsAuto: data => getClientsAuto(data),
		findJournalist: data => findJournalist(data),
		createClient: data => createClient(data),
		getMediaList: data => getMediaList(data),
		getJournalistInterests: data => getJournalistInterests(data),
		createInterest: data => createInterest(data),
		createPitchActionForm1: data => createPitchActionForm1(data),
		createPitchActionForm2: data => createPitchActionForm2(data),
		createPitchActionForm3: data => createPitchActionForm3(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
