import HELPER from '../../utils/helper';
import { getJournalistStatus, getUserId } from './signup';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';


export const getSurvey = () => {
	if (HELPER.isSuccessInApi(getJournalistStatus())) {
		return {
			type: 'GET_JOURNALIST_SURVEY',
		};
	}
	return {
		type: 'GET_PR_SURVEY',
	};
};

export const surveySubmission = async ({ answers }) => {
	const answersObj = {};
	Object.keys(answers).map((id) => {
		answersObj[`${id}`] = `${answers[id].value} answer`;
		return null;
	});
	const payload = {
		user_id: getUserId(),
		question_answer: answersObj,
	};
	return Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST, payload);
};
