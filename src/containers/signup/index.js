import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UnAuthorized from '../../routes/unAuthorized';
import SignUp from './signup';
import '../../../public/css/style.css';
import HELPER from '../../utils/helper';
import {
	signUp,
	createPrProfile,
	createJournalistProfile,
	getJournalistInterests,
	createInterest,
	createPrCompany,
	getPrCompanies,
	createPosition,
	getPositions,
} from '../../redux/actions/signup';

class Index extends UnAuthorized {
	// state initialization
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			pitches: 25,
			relevant: 25,
			responses: 25,
			outlet: [],
			interests: [],
			companiesList: [],
			positionList: [],
			isPr: this.getUserRole(props, 'isPr') || false,
			isJournalist: this.getUserRole(props, 'isJournalist') || false,
			error: {},
			selectedCompanyUrl: [],
		};
	}

	// identify the type of loggedIn user (journalist/pr)
	getUserRole = (props, key) => {
		const { login: { data } } = props;
		if (data) { return data[key]; }
		return null;
	};

	// // identify the type of loggedIn user (journalist/pr)
	// getUserRole = (props) => {
	// 	const { login: { data: { user } } } = props;
	// 	if (user && user.isPr) return 3;
	// 	return 1;
	// };

	static getDerivedStateFromProps(props, state) {
		const { login } = props;
		const { step } = state;
		if (HELPER.isSuccessInApi(login.code) && step === 2) {
			return {
				step: 3,
			};
		}
		return null;
	}

	// handle next button and final submission
	handleSubmit = (e) => {
		e.preventDefault();
		const obj = this.state;
		const { step, role } = this.state;
		const {
			signUp, createPrProfile, createJournalistProfile, login: { data },
		} = this.props;
		if (step === 2) {
			// validate form2
			const validateForm2 = HELPER.SignUpStep2Validation(obj);
			if (!validateForm2) {
				this.setState({ error: {} });
				signUp(this.state);
			} else {
				this.setState({ error: validateForm2 }, () => {});
			}
		} else if (step === 3) {
			// validate form3 && Pr final submission
			const validateForm3 = HELPER.SignUpStep3Validation(obj);
			if (!validateForm3) {
				if (role === 'Journalist') {
					this.goToNextForm();
				} else {
					createPrProfile({ ...this.state, url: data.url });
				}
			} else this.setState({ error: validateForm3 });
		} else if (step === 4) {
			// validate form4 && Journalist final submission
			const validateForm4 = HELPER.SignUpStep4Validation(obj);
			if (!validateForm4) createJournalistProfile(this.state);
			else this.setState({ error: validateForm4 });
		}
	};

	// redirect to next form
	goToNextForm = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	// handle back button
	handleCancel = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	// handle input change in form
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// handle range change in form
	handleRangeChange = (key, value) => {
		this.setState({ [key]: value });
	};

	// handle user selection
	handleUserSelection = (key) => {
		this.setState({ role: key, isPr: key === 'Pr', isJournalist: key === 'Journalist' });
		this.goToNextForm();
	};

	// create a new interest
	createInterest = (val) => {
		const { createInterest } = this.props;
		createInterest(val);
	};

	// handle interests selection
	handleJournoInterestSelection = journoInterests => this.setState({ journoInterests });

	// create a new company
	createPrCompany = (val) => {
		const { createPrCompany } = this.props;
		createPrCompany(val);
	};

	// handle company selection
	handleCompanySelection = companiesList => this.setState({
		companiesList,
		companyString: companiesList.name,
	});

	// create a new position
	createPosition = (val) => {
		const { createPosition } = this.props;
		createPosition(val);
	};

	// handle position selection
	handlePositionSelection = positionList => this.setState({
		positionList,
		positionString: positionList.name,
	});

	// handle companies for outlet
	onInputChange = (outletString) => {
		const { getPrCompanies } = this.props;
		this.setState({ outlet: [], outletString });
		getPrCompanies(outletString);
	};

	filterCompany = (companyString) => {
		const { getPrCompanies } = this.props;
		this.setState({ companyString });
		getPrCompanies(companyString);
	};

	filterPosition = (positionString) => {
		const { getPositions } = this.props;
		this.setState({ positionString });
		getPositions(positionString);
	};

	// On Selecting Outlet
	onSelectOutlet = outletList => this.setState({ outletList });

	// render login sign up page
	render() {
		// if(this.state.loading) return <div>Loading.....</div>
		return (
			<SignUp
				{...this.state}
				{...this.props}
				onSubmit={this.handleSubmit}
				onBack={this.handleCancel}
				onChange={this.handleChange}
				onRangeChange={this.handleRangeChange}
				onUserSelection={this.handleUserSelection}
				onCreate={this.createInterest}
				onTodoSelection={this.handleJournoInterestSelection}
				onCreateCompany={this.createPrCompany}
				onCompanySelection={this.handleCompanySelection}
				onCreatePosition={this.createPosition}
				onPositionSelection={this.handlePositionSelection}
				onChangeSelect={this.onSelectOutlet}
				changeInput={this.onInputChange}
				filterCompany={this.filterCompany}
				filterPosition={this.filterPosition}
				// onSubmit={this.handleSubmit}
			/>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		signUp: values => signUp(values),
		createPrProfile: values => createPrProfile(values),
		createJournalistProfile: values => createJournalistProfile(values),
		getJournalistInterests: data => getJournalistInterests(data),
		createInterest: data => createInterest(data),
		getPrCompanies: data => getPrCompanies(data),
		createPrCompany: data => createPrCompany(data),
		getPositions: data => getPositions(data),
		createPosition: data => createPosition(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
