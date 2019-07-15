/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Loader from '../../components/loader';
import Authorized from '../../routes/authorized';
import CreatePitch from './createPitch';
import { getPrClientsAuto, getPrMedialists } from '../../redux/actions/pitches';
import Personalization from './personalize';
import FinalizePitch from './finalize';

// import UnAuthorized from '../../routes/unAuthorized';
// import HELPER from '../../utils/helper';


class Index extends Authorized {
	state = {
		hideDiv: false,
		headlineText: '',
		answers: {},
		progressValue: 0,
		pressReleaseImage: '',
		steps: 3,
		active: 1,
		options: [{ id: 1, value: 'Yahoo' },
			{ id: 2, value: 'Google' }, { id: 3, value: 'Microsoft' }, { id: 4, value: 'Facebook' }],
		name: '',
		value: '',
		searchString: '',
		journalists: [{ id: 1, name: 'shhh koi h' }, { id: 2, name: 'chal be' }, { id: 3, name: 'koi nhi hai' }],
		selectedJournalists: [],
		mediaFiles: ['', '', ''],
	}

	componentDidMount() {
		const {
			getPrClientsAuto, getPrMedialists,
		} = this.props;
		getPrClientsAuto();
		getPrMedialists();
	}

	onChangeSelect = (selectedValue) => { console.log('xxxxxx', selectedValue); }

	handlePrSelect = (id) => {
		const { journalists, selectedJournalists } = this.state;
		const journalistSelected = _.find(selectedJournalists, o => o.id === id);
		const journal = journalistSelected ? [...selectedJournalists]
			: [...selectedJournalists, _.find(journalists, o => o.id === id)];
		this.setState({ selectedJournalists: journal, searchString: '' });
	}

	setSearchValue = (searchString) => {
		this.setState({ searchString });
	}

	handleJournalistMessageChange = (e, id) => {
		const { selectedJournalists } = this.state;
		selectedJournalists[id].personalMessage = e.target.value;
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

	displayScreen = () => {
		const { active, steps } = this.state;
		let render;
		if (active === 1) {
			render = 				(
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
						handleAddClientImage={this.handleAddClientImage}
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

	handleClient = () => {
	};

	handleAddNewClient = () => {
		this.setState(
			{
				hideDiv: true,
			},
		);
	};

	handleAddProfile = () => {
	};

	handleAddTopics = () => {
	};

	handleAddMedia = (index, image) => {
		const file = new File(image);
		const { mediaFiles } = this.state;
		mediaFiles[index] = file;
		// console.log(file);
		this.setState({ mediaFiles });
	};

  handleAddClientImage = (image) => {
  	console.log(image);
  };

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
			this.setState({
				pressReleaseImage: URL.createObjectURL(e.target.files[0]),
			});
		}
	}


	render() {
		return (<React.Fragment>{ this.displayScreen() }</React.Fragment>);
	}
}


const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getPrClientsAuto: data => getPrClientsAuto(
			data,
		),
		getPrMedialists: () => getPrMedialists(),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps,	mapDispatchToProps)(Index);
