import HELPER from '../../utils/helper';
import { createSelector } from 'reselect';
import store from '../Store';
import { getJournalistStatus } from './signup';
import Request from '../../redux/ApiCaller';
import CONSTANT from '../../utils/constant';
import { getUserId } from './signup';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: ''
};

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
		question_answer: answersObj
	};
	return Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST, payload);
};
