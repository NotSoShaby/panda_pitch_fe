import React, { Component } from 'react';
import SignUp from './signup';
import '../../../public/css/style.css';
import HELPER from '../../utils/helper';
import UnAuthorized from '../../routes/unAuthorized';
import { bindActionCreators } from 'redux';
import { signUp, createPrProfile, createJournalistProfile } from '../../redux/actions/signup';
import { connect } from 'react-redux';

class Index extends UnAuthorized {
	// state initialization
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			pitches: 25,
			relevant: 25,
			responses: 25,
			topics: ''
		};
	}

	static getDerivedStateFromProps(props, state) {
		let { signup, prProfile, journalistProfile } = props;
		let { step } = state;
		if (HELPER.isSuccessInApi(signup.code) && step === 2) {
			return {
				step: 3
			};
		} else if (signup.data.user_id && step === 1) {
			return {
				step: 3,
				role: signup.data.role
			};
		} else if (
			(HELPER.isSuccessInApi(prProfile.code) && step === 3) ||
			(HELPER.isSuccessInApi(journalistProfile.code) && step === 4)
		) {
			return {
				step: 5
			};
		}
	}

	// handle next button and final submission
	handleSubmit = () => {
		let { step, role } = this.state;
		let { signUp, createPrProfile, createJournalistProfile } = this.props;
		if (step === 2) {
			// validate form2
			if (!HELPER.SignUpStep2Validation(this.state)) signUp(this.state);
		} else if (step === 3) {
			// validate form3
			let validateForm3 = HELPER.SignUpStep3Validation(this.state);
			if (!validateForm3)
				if (HELPER.isJournalist(role)) {
					this.goToNextForm();
				} else createPrProfile(this.state);
			else this.setState({ error: validateForm3 });
		} else if (step === 4) {
			// validate form4
			let validateForm4 = HELPER.SignUpStep4Validation(this.state);
			if (!validateForm4) createJournalistProfile(this.state);
			else this.setState({ error: validateForm4 });
		} else {
			// final submission
			this.goToNextForm();
			this.props.history.push({ pathname: '/', state: { isAuthorized: true } });
		}
	};

	// redirect to next form
	goToNextForm = () => this.setState({ step: this.state.step + 1 });

	// handle back button
	handleCancel = () => {
		this.setState({ step: this.state.step - 1 });
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
		this.setState({ [key]: this.state[key] ? `${this.state[key]},${value}` : value });
	};

	// handle user selection
	handleUserSelection = (key, value) => {
		this.setState({ [key]: value });
		localStorage.setItem('role', JSON.stringify(value));
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

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			signUp: (values) => signUp(values),
			createPrProfile: (values) => createPrProfile(values),
			createJournalistProfile: (values) => createJournalistProfile(values)
		},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
