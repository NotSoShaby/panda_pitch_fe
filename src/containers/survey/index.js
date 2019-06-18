import React from 'react';
import Survey from './survey';
import Authorized from '../../routes/authorized';
import { getSurvey, surveySubmission } from '../../redux/actions/survey';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HELPER from '../../utils/helper';
import Loader from '../../components/loader';
import Question from './question';

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
		let { getSurvey } = this.props;
		getSurvey();
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
		console.log('res============>', res);
	};

	render() {
		return (
			<Loader isLoading={HELPER.isEmptyObject(this.props.survey.data) || false}>
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
			getSurvey: (data) => getSurvey(data)
			// surveySubmission: (values) => surveySubmission(values)
		},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
