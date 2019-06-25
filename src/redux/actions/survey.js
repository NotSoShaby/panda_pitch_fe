import HELPER from '../../utils/helper';
import { getJournalistStatus } from './signup';
import Request from '../../redux/ApiCaller';
import CONSTANT from '../../utils/constant';
import { getUserId } from './signup';

export const getSurvey = () => {
	if (HELPER.isSuccessInApi(getJournalistStatus()))
		return {
			type: 'GET_JOURNALIST_SURVEY'
		};
	else
		return {
			type: 'GET_PR_SURVEY'
		};
};

export const surveySubmission = async ({ answers }) => {
	let answersObj = {};
	Object.keys(answers).map((id) => (answersObj[`${id}`] = `${answers[id].value} answer`));
	let payload = {
		user_id: getUserId(),
		question_answer: JSON.stringify(answersObj)
	};
	return Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST, payload);
};
