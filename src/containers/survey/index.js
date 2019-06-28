import React from 'react';
import Survey from './survey';
import Authorized from '../../routes/authorized';
import { getJRSurvey, getPRSurvey, surveySubmission } from '../../redux/actions/survey';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HELPER from '../../utils/helper';
import Loader from '../../components/loader';

class Index extends Authorized {
	state = {
		answers: {}
	};

	static getDerivedStateFromProps(props, state) {
		let { answers } = state;
    let surveyData = props.survey.data;
		if (HELPER.isEmptyObject(answers) && surveyData && surveyData.questions) {
			let obj = {};
			surveyData.questions.map((question) => (obj[question.id] = { id: question.id, value: 0 }));
			return {
				answers: obj
			};
		} else return null;
	}

	// request for survey
	componentDidMount() {
    let {role} = this.props.signup.data;
  	let { getJRSurvey, getPRSurvey } = this.props;
	  if(HELPER.isJournalist(role))
      getJRSurvey();
    else 
      getPRSurvey();
		// getSurvey();
	}

	// handle survey answers
	handleRangeChange = (data) => {
		let { answers } = this.state;
		answers[data.id].value = data.value;
		this.setState({ answers });
	};

	// Redirect to home page
	handleCancel = () => this.props.history.push('/');

	// handle survey submission and redirect to the home screen
	handleSubmit = async () => {
		let res = await surveySubmission(this.state);
    if (HELPER.isSuccessInApi(res.code)) {
      this.props.history.push("/")
    }
	};

	render() {
		return (
			<Loader isLoading={!HELPER.isSuccessInApi(this.props.survey.code)}>
				<Survey
					{...this.props}
					{...this.state}
					onRangeChange={this.handleRangeChange}
					onSubmit={this.handleSubmit}
					onBack={this.handleCancel}
				/>
			</Loader>
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
      getJRSurvey: () => getJRSurvey(),
      getPRSurvey: () => getPRSurvey(),
			// surveySubmission: (values) => surveySubmission(values)
		},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
