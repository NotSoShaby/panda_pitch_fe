import React from 'react';
import SignUp from './signup';
import '../../../public/css/style.css';
import HELPER from '../../utils/helper';
import UnAuthorized from '../../routes/unAuthorized';
import { bindActionCreators } from 'redux';
import {
	signUp,
	createPrProfile,
	createJournalistProfile,
  getJournalistInterests,
  createInterest,
} from '../../redux/actions/signup';
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
			topics: [],
      role: this.getUserRole(props),
    };
  }
  
  // identify the type of loggedIn user (journalist/pr)
	getUserRole(props) {
		if (props.signup.data && props.signup.data.user_id) return 3;
		else return 1;
	}

	static getDerivedStateFromProps(props, state) {
		let { signup, prProfile, journalistProfile } = props;
		let { step } = state;
		if (HELPER.isSuccessInApi(signup.code) && step === 2) {
			return {
        step: 3
			};
		} else if (
			(HELPER.isSuccessInApi(prProfile.code) && step === 3) ||
			(HELPER.isSuccessInApi(journalistProfile.code) && step === 4)
		) {
			props.history.push({ pathname: '/survey' });
    }
    return null
	}

	// handle next button and final submission
	handleSubmit = () => {
    let { step, role } = this.state;
    let { signUp, createPrProfile, createJournalistProfile } = this.props;
		if (step === 2) {
      // validate form2
    	if (!HELPER.SignUpStep2Validation(this.state)) {
        signUp(this.state);
      }
		} else if (step === 3) {
			// validate form3 && Pr final submission
			let validateForm3 = HELPER.SignUpStep3Validation(this.state);
			if (!validateForm3)
				if (HELPER.isJournalist(role)) {
					this.goToNextForm();
				} else createPrProfile(this.state);
			else this.setState({ error: validateForm3 });
		} else if (step === 4) {
			// validate form4 && Journalist final submission
			let validateForm4 = HELPER.SignUpStep4Validation(this.state);
			if (!validateForm4) createJournalistProfile(this.state);
			else this.setState({ error: validateForm4 });
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

	// handle user selection
	handleUserSelection = (key, value) => {
		this.setState({ [key]: value }, () => {
      localStorage.setItem('role', this.state.role)
    });
		this.goToNextForm();
  };

  // create a new interest
	createInterest = (val) => {
    let { createInterest } = this.props;
    createInterest(val);
  }

  // handle interests selection
	handleTodoSelection = (topics) => {
    this.setState({topics:topics})
  }
  
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
        onTodoSelection={this.handleTodoSelection}
     	/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			signUp: (values) => signUp(values),
			createPrProfile: (values) => createPrProfile(values),
			createJournalistProfile: (values) => createJournalistProfile(values),
      getJournalistInterests: (data) => getJournalistInterests(data),
      createInterest: (data) => createInterest(data)
    },
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
