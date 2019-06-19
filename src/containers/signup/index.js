import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UnAuthorized from '../../routes/unAuthorized';
import SignUp from './signup';
import '../../../public/css/style.css';
import HELPER from '../../utils/helper';
import {
	signUp, createPrProfile, createJournalistProfile, getSurvey,
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
			topics: [],
			role: this.getUserRole(props),
		};
	}

	getUserRole = (props) => {
		if (props.signup.data && props.signup.data.user_id) return 3;
		return 1;
	}

	static getDerivedStateFromProps(props, state) {
		const { signup, prProfile, journalistProfile } = props;
		const { step } = state;
		if (HELPER.isSuccessInApi(signup.code) && step === 2) {
			return {
				step: 3,
			};
		}
		if (
			(HELPER.isSuccessInApi(prProfile.code) && step === 3)
			|| (HELPER.isSuccessInApi(journalistProfile.code) && step === 4)
		) {
			return props.history.push({ pathname: '/survey', state: { isAuthorized: true } });
		}
		return null;
	}

	// handle next button and final submission
	handleSubmit = () => {
		const obj = this.state;
		const { step, role } = this.state;
		const { signUp, createPrProfile, createJournalistProfile } = this.props;
		if (step === 2) {
			// validate form2
			if (!HELPER.SignUpStep2Validation(this.state)) signUp(this.state);
		} else if (step === 3) {
			// validate form3 && Pr final submission
			const validateForm3 = HELPER.SignUpStep3Validation(obj);
			if (!validateForm3) {
				if (HELPER.isJournalist(role)) {
					this.goToNextForm();
				} else createPrProfile(this.state);
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
	}

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

	// handle tag selection in form
	handleSelection = (key, value) => {
		const previousValue = this.state[key];
		this.setState({ [key]: previousValue ? `${previousValue},${value}` : value });
	};

	// handle user selection
	handleUserSelection = (key, value) => {
		this.setState({ [key]: value });
		this.goToNextForm();
	};

	// render login sign up page
	render() {
		return (
			<SignUp
				{...this.state}
				{...this.props}
				onSubmit={this.handleSubmit}
				onBack={this.handleCancel}
				onChange={this.handleChange}
				onRangeChange={this.handleRangeChange}
				onSelect={this.handleSelection}
				onUserSelection={this.handleUserSelection}
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
		getSurvey: data => getSurvey(data),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
