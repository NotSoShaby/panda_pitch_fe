import HELPER from '../../utils/helper';
import { createSelector } from 'reselect';
import store from '../Store';
import { getJournalistStatus } from './signup';
import Request from '../../redux/ApiCaller';
import CONSTANT from '../../utils/constant';

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
	let payload = Object.keys(answers).map((id) => ({ user_id: 2, question_id: id, answer: answers[id].value }));
	return Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST, payload);
};
