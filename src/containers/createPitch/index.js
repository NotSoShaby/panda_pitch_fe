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
	getClientsAuto, findJournalist, getMediaListAutoComplete, removeJournalist,
} from '../../redux/actions/pitches';
import { getJournalistInterests, createInterest } from '../../redux/actions/signup';
import { createClient } from '../../redux/actions/clients';
import {
	createPitchActionForm1,
	createPitchActionForm2,
	createPitchActionForm3,
	clearReducer,
} from '../../redux/actions/pitch';
import Personalization from './personalize';
import FinalizePitch from './finalize';
import CommonHelper from '../../utils/helper';
import IMAGES from '../../assets/images';
import METADATA from '../../utils/metadata';

const { DOCUMENT } = IMAGES;

const { CTA } = METADATA;

class Index extends Authorized {
	constructor(props) {
		super(props);
		this.state = {
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
			cta: JSON.parse(JSON.stringify(CTA)),
			title: '',
			is_private: false,
			press_release: '',
			saveAndNext: false,
			selectedForm: 1,
			errors: {},
			loadContent: false,
			pitchUrl: '',
		};
	}

  autoFillState = () => {
  	const { pitchDetail: { code, data } } = this.props;
  	if (code === 'SUCCESS') {
  		const {
  			topicsData, content, cta, images, pressRelease, clientData, availability,
  			title, url,
  		} = data;
  		const allInterests = topicsData.map(({ name, url }) => ({
  			isActive: true,
  			url,
  			value: name,
  		}));
  		const ctaObj = cta.map(ct => ({
  			isActive: true, value: CommonHelper.getCtaUserValue(ct), apiValue: ct,
  		}));
  		let progressValue = 0;
  		let is_private = false;
  		const MediaImages = images.map(data => data.image);
  		const mediaFiles = images.map(data => new File([data.image], 'mediaImage.png'));
  		const selectedClient = clientData;
  		const press_release = pressRelease;
  		if (availability === 'embargo') {
  			progressValue = 10;
  			is_private = true;
  		} else if (availability === 'exclusive') {
  			progressValue = 20;
  			is_private = true;
  		}
  		const UnselectedCta = CTA.filter(data => !cta.includes(data.apiValue));
  		return {
  			allInterests,
  			content,
  			title,
  			cta: [...UnselectedCta, ...ctaObj],
  			progressValue,
  			is_private,
  			MediaImages: mediaFiles.length ? mediaFiles : ['', '', ''],
  			selectedClient,
  			pressReleaseImage: press_release,
  			press_release: new File([pressRelease], 'pressRelease.png') || '',
  			mediaFiles: MediaImages.length ? MediaImages : ['', '', ''],
  			pitchUrl: url,
  		};
  	}
  	return this.state;
  }

  async componentDidMount() {
  	const data = this.autoFillState();
  	await this.setState(data);
  	await this.setState({ loadContent: true });
  }


  componentWillReceiveProps(nextProps) {
  	const { createPitchReducer, createClientReducer } = nextProps;
  	const { props } = this;
  	const { isLoading } = createClientReducer;

  	if ((createClientReducer !== props.createClientReducer) && (!isLoading && (typeof isLoading === 'boolean'))) {
  		const { data, error } = createClientReducer;
  		if (data && (typeof data === 'object') && Object.keys(data).length) {
  			this.setState({ hideNewClientDiv: true, newClient: {}, errors: {} });
  		} else if (error && ((typeof error === 'object') || (typeof error === 'string'))) {
  			this.setState({ errors: { clientApiError: (typeof error === 'object') ? JSON.stringify(error) : error } });
  		}
  	}
  	if (createPitchReducer !== props.createPitchReducer) {
  		const { isLoading } = createPitchReducer;
  		if (!isLoading && (typeof isLoading === 'boolean')) {
  			this.handleFormSubmit(createPitchReducer);
  		}
  	}
  }

  componentWillUnmount() {
  	const { clearReducer } = this.props;
  	clearReducer('CLEAR_GET_PITCH_BY_ID');
  	clearReducer('CLEAR_CREATE_PITCH_FORM');
  }


	handleFormSubmit = (createPitchReducer) => {
		const {
			error, data, form1, form2,
		} = createPitchReducer;
		const { saveAndNext } = this.state;
		if (data && (typeof data === 'object') && Object.keys(data).length) {
			if (saveAndNext) {
				const { selectedForm } = this.state;
				if ((form1 && (typeof form1 === 'object')) && (selectedForm === 2)) {
					this.setState({ active: 2, errors: {} });
				} else if ((form2 && (typeof form2 === 'object')) && (selectedForm === 3)) {
					this.setState({ active: 3, errors: {} });
				}
			} else {
				this.setState({ errors: { createPitchApiSuccess: 'Data Saved Successfully' } });
			}
		} else if (error && ((typeof error === 'object') || (typeof error === 'string'))) {
			this.setState({ errors: { createPitchApiError: (typeof error === 'object') ? JSON.stringify(error) : error } });
		}
		this.setState({ saveAndNext: false });
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
  	const { selectedJournalists } = this.state;
  	if (selectedJournalists.length) {
  		const { createPitchActionForm2, createPitchReducer: { form1: { url } } } = this.props;
  		const data = selectedJournalists.map(journalist => ({
  			journalist: journalist.url,
  			pitch: url,
  			content: journalist.personalMessage,
  		}));
  		createPitchActionForm2(data);
  	} else {
  		this.setState({ errors: { journalistCount: 'Please select at least one journalist' } });
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
		const { active, selectedJournalists } = this.state;
		if (active === 1) {
  	window.scrollTo(0, 0);
			this.setState({ saveAndNext: true, selectedForm: 2 }, () => {
				this.saveScreenData();
			});
		} else if (active === 2) {
			if (selectedJournalists.length) {
      	window.scrollTo(0, 0);
				this.setState({ saveAndNext: true, selectedForm: 3, errors: {} }, () => {
					this.savePersonalizeData();
				});
			} else {
				this.setState({ errors: { journalistCount: 'Please select at least one journalist' } });
			}
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
		if (press_release) {
			form_data.append('press_release', press_release);
		}
		await MediaImages.map((data) => {
			if (data) {
				form_data.append('images', data);
			}
			return null;
		});
		form_data.append('title', title);
		form_data.append('client', selectedClient.url);
		form_data.append('is_public', !is_private);
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
		const { createPitchReducer: { form1 } } = this.props;
		const { pitchUrl } = this.state;
		const pitchId = ((form1 && form1.url) || pitchUrl);
		if (pitchId) {
			const url = pitchId.split('/');
			form_data.append('id', url[5]);
		}

		return form_data;
	}

	// save create pitch form (form 1)
	saveScreenData = async () => {
		const { active } = this.state;
		if (active === 1) {
			const { createPitchActionForm1 } = this.props;
			const ValidatePitchStep1 = CommonHelper.validateCreatePitchStep1(this.state);
			if (Object.keys(ValidatePitchStep1).length) {
				this.setState({ errors: ValidatePitchStep1 });
			} else {
				this.setState({ errors: {} });
				const DATA = await this.createPitchData();
				createPitchActionForm1(DATA);
			}
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
		if (image && (image.size < 2621440)) {
			const { mediaFiles, MediaImages } = this.state;
			mediaFiles[index] = URL.createObjectURL(image);
			MediaImages[index] = image;
			this.setState({ mediaFiles, MediaImages, errors: {} });
		} else {
			this.setState({ errors: { mediaImages: 'image size should be less than 2.5 mb' } });
		}
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
		if (value.value) {
			this.setState({ is_private: true });
		} else {
			this.setState({ is_private: false });
		}
	}

	// handle press release
	handleAddPressRelease = (e) => {
		if (e && e.target.files && e.target.files[0]) {
			const UPLODED_DATA = e.target.files[0];
			if (UPLODED_DATA && (UPLODED_DATA.size < 2621440)) {
				const pressReleaseImage = URL.createObjectURL(UPLODED_DATA);
				this.setState({ pressReleaseImage, press_release: UPLODED_DATA, errors: {} });
			} else {
				this.setState({ errors: { pressRelease: 'Press release size should be less than 2.5 mb' } });
			}
		}
	}

	// handle selected topic
	handleInterestSelection = (allInterests) => {
		this.setState({ allInterests });
	}

	// handle client form input
	handleClientPropertyChange = (name, value) => {
		if ((name !== 'image' || (value && value.size < 2621440))) {
			const { newClient } = this.state;
			newClient[name] = value;
			this.setState({ newClient, errors: {} });
		} else {
			this.setState({ errors: { clientLogo: 'Logo size should be less than 2.5 mb' } });
		}
	}

	// handle CTA selection
	onCTASelection = (data) => {
		this.setState({ cta: data });
	}

	// handle create pitch form input fields
	onChangeState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	// handle tiny-input change
	onChangeContent = (value) => {
		this.setState({ content: value.level.content });
	}

	// create a new client
	createClient = () => {
		const { newClient } = this.state;
		const { name, website, image } = newClient;
		const validateData = CommonHelper.validateCreateClient(newClient);
		if (Object.keys(validateData).length) {
			this.setState({ errors: validateData });
		} else {
			const { createClient } = this.props;
			const formData = new FormData();
			formData.append('name', name);
			formData.append('website', website);
			if (image) {
				formData.append('image', image);
			}
			createClient(formData);
		}
	};

  // return filter media list
  getJRMediaList = (val) => {
  	const { getMediaListAutoComplete } = this.props;
  	getMediaListAutoComplete(val);
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
  	const user = _.find(form2, o => o.journalist === selectedJournalists[index].url);
  	const url = user.url.split('/');
  	await removeJournalist(url[5]).then((data) => {
  		if (data.status) {
  			selectedJournalists.splice(index, 1);
  			this.setState({ selectedJournalists });
  		} else {
  			this.setState({ errors: { deleteIssue: 'There is an issue in deleting journalist' } });
  		}
  	}).catch((e) => {
  		const DATA = (typeof e === 'string') ? e : 'There is an issue in deleting journalist';
  		this.setState({ errors: { deleteIssue: DATA } });
  	});
  }

	onLodingImgError = () => {
		this.setState({ pressReleaseImage: DOCUMENT });
	}

	handleAddMoreMedia = () => {
		const { mediaFiles, MediaImages } = this.state;
		const DATA = [...mediaFiles, ''];
		const MediaImagesData = [...MediaImages, ''];
		this.setState({ mediaFiles: DATA, MediaImages: MediaImagesData });
	}

	// return conditional form rendering
	displayScreen = () => {
		const { active } = this.state;
		const { createInterest } = this.props;
		let render;
		if (active === 1) {
			render = (
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
					onLodingImgError={this.onLodingImgError}
					handleAddMoreMedia={this.handleAddMoreMedia}
				/>
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
		const { createPitchReducer: { isLoading } } = this.props;
		return (
			<Loader isLoading={isLoading}>
				{this.displayScreen()}
			</Loader>
		);
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
		getMediaListAutoComplete: data => getMediaListAutoComplete(data),
		getJournalistInterests: data => getJournalistInterests(data),
		createInterest: data => createInterest(data),
		createPitchActionForm1: data => createPitchActionForm1(data),
		createPitchActionForm2: data => createPitchActionForm2(data),
		createPitchActionForm3: data => createPitchActionForm3(data),
		clearReducer: data => clearReducer(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
