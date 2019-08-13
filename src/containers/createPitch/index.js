/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from '../../components/loader';
import Authorized from '../../routes/authorized';
import CreatePitch from './createPitch';
import { getClientsAuto, getPrMedialists } from '../../redux/actions/pitches';
import { getJournalistInterests, createInterest } from '../../redux/actions/signup';
import { createClient } from '../../redux/actions/clients';
import { createPitchAction } from '../../redux/actions/pitch';
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
		options: [{ id: 1, value: 'Yahoo' }, { id: 2, value: 'Google' }, { id: 3, value: 'Microsoft' }, { id: 4, value: 'Facebook' }],
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
		is_private: true,
		press_release: '',
		saveAndNext: false,
	}

	componentDidMount() {
		const { getPrMedialists } = this.props;
		getPrMedialists();
	}

	componentWillReceiveProps(nextProps) {
		const { createPitchReducer, createClientReducer } = nextProps;
		const { props } = this;
		if (createClientReducer !== props.createClientReducer) {
			const { data, error } = createClientReducer;
			if (data && (typeof data === 'object') && Object.keys(data).length) {
				this.setState({ hideNewClientDiv: true, newClient: {} });
			} else if (error) {
				console.log('createClientReducer.error show toster', error);
			}
		}
		if (createPitchReducer !== props.createPitchReducer) {
			const { data, error } = createPitchReducer;
			if (data && (typeof data === 'object') && Object.keys(data).length) {
				const { saveAndNext, active } = this.state;
				if (saveAndNext) {
					this.setState({ active: active + 1 });
				}
			} else if (error) {
				console.log('createPitchReducer.error', error);
			}
			this.setState({ saveAndNext: false });
		}
	}

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
		const { journalists, selectedJournalists } = this.state;
		const journalistSelected = _.find(selectedJournalists, o => o.id === id);
		const journal = journalistSelected ? [...selectedJournalists]
			: [...selectedJournalists, _.find(journalists, o => o.id === id)];
		this.setState({ selectedJournalists: journal, searchString: '' });
	}

	setSearchValue = (searchString) => {
		const { getClientsAuto } = this.props;
		getClientsAuto(searchString);
		this.setState({ searchString, selectedClient: {} });
	}

	handleJournalistMessageChange = (e, id) => {
		const { selectedJournalists } = this.state;
		selectedJournalists[id].personalMessage = e.target.value;
		this.setState({ selectedJournalists });
	}

	handleNextScreen = () => {
		const { active } = this.state;
		if (active === 1) {
			this.saveScreenData();
			this.setState({ saveAndNext: true });
		} else {
			this.setState({ active: active + 1 });
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
		console.log('>>>>>>>> pressReleaseImage', press_release);
		console.log('>>>>>>>> title', title);
		console.log('>>>>>>>> client', selectedClient.name);
		console.log('>>>>>>>> is_public', !(is_private === 'on'));
		console.log('>>>>>>>> content', content);
		console.log('>>>>>>>> availability', this.availabilityType());
		console.log('asasas', MediaImages);
		const form_data = new FormData();
		form_data.append('press_release', press_release);
		await MediaImages.map((data) => {
			if (data) {
				form_data.append('images', data);
			}
			console.log('mediaFiles', data);
			return null;
		});
		form_data.append('title', title);
		form_data.append('client', selectedClient.url);
		form_data.append('is_public', !(is_private === 'on'));
		await allInterests.map((data) => {
			if (data.isActive) {
				console.log('allInterests', data.url);
				form_data.append('topics', data.url);
			}
			return null;
		});
		await cta.map((data) => {
			if (data.isActive) {
				console.log('cta', data.apiValue);
				form_data.append('cta', data.apiValue);
			}
			return null;
		});
		form_data.append('content', content);
		form_data.append('availability', this.availabilityType());
		return form_data;
	}

	saveScreenData = async () => {
		const { active } = this.state;
		if (active === 1) {
			const { createPitchAction } = this.props;
			const DATA = await this.createPitchData();
			createPitchAction(DATA);
		}
	}

	handlePreviousScreen = () => {
		const { active } = this.state;
		this.setState({ active: active - 1 });
	}

	handleClient = (client) => {
		// if (_.findLastIndex(selectedClients, client) === -1) {
		// 	selectedClients.push(client);
		// }
		this.setState({ selectedClient: client });
	};

	handleAddProfile = () => {
	};

	handleAddTopics = () => {
	};

	handleAddMedia = (index, image) => {
		const { mediaFiles, MediaImages } = this.state;
		mediaFiles[index] = URL.createObjectURL(image);
		MediaImages[index] = image;
		this.setState({ mediaFiles, MediaImages });
	};

	handleRemoveMedia = (index) => {
		const { mediaFiles, MediaImages } = this.state;
		mediaFiles[index] = '';
		MediaImages[index] = '';
		this.setState({ mediaFiles, MediaImages });
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
			this.setState({ pressReleaseImage, press_release: e.target.files[0] });
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

	onCTASelection = (data) => {
		this.setState({ cta: data });
	}

	onChangeState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	onChangeContent = (value) => {
		console.log('dsadsad', value);
		this.setState({ content: value.level.content });
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
		createClient(formData);
	};

	displayScreen = () => {
		const { active, steps, newClient } = this.state;
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
						saveScreenData={this.saveScreenData}
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
						newClient={newClient}
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
		createClient: data => createClient(data),
		getPrMedialists: () => getPrMedialists(),
		getJournalistInterests: data => getJournalistInterests(data),
		createInterest: data => createInterest(data),
		createPitchAction: data => createPitchAction(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
