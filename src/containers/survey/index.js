import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Survey from './survey';
import Authorized from '../../routes/authorized';
import { getSurvey, surveySubmission } from '../../redux/actions/survey';
import HELPER from '../../utils/helper';
import Loader from '../../components/loader';

class Index extends Authorized {
	state = {
		answers: {},
	};

	static getDerivedStateFromProps(props, state) {
		const { answers } = state;
		const surveyData = props.survey.data;
		if (HELPER.isEmptyObject(answers) && surveyData && surveyData.questions) {
			const obj = {};
			surveyData.questions.map((question) => {
				obj[question.id] = { id: question.id, value: 0 };
				return null;
			});
			return {
				answers: obj,
			};
		}
		return null;
	}

	// request for survey
	componentDidMount() {
		const { getSurvey } = this.props;
		getSurvey();
	}

	// handle survey answers
	handleRangeChange = (data) => {
		const { answers } = this.state;
		answers[data.id].value = data.value;
		this.setState({ answers });
	};

	// Redirect to home page
	handleCancel = () => this.props.history.push('/');

	// handle survey submission and redirect to the home screen
	handleSubmit = async () => {
		await surveySubmission(this.state);
		// console.log('res============>', res);
	};

	render() {
		return (
			<Loader isLoading={HELPER.isEmptyObject(this.props.survey.data)}>
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

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		getSurvey: data => getSurvey(data),
		// surveySubmission: (values) => surveySubmission(values)
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
