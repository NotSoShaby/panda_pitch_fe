import { createSelector } from 'reselect';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import store from '../Store';
import history from '../../routes/history';

const initialState = {
	message: {},
	data: {},
	code: '',
};


const getJournalistState = (state = store.getState()) => {
	if (state.profile) {
		return state.profile;
	}
	return initialState;
};

const getPrState = (state = store.getState()) => {
	if (state.profile) {
		return state.profile;
	}
	return initialState;
};

export const getJournalistStatus = createSelector(getJournalistState, n => n.data.code);
export const getPrStatus = createSelector(getPrState, n => n.data.code);

export const getSurvey = data => ({ type: 'GET_SURVEY', payload: data });

export const surveySubmission = async ({ answers, survey }) => {
	const answersObj = [];
	Object.keys(answers).map((id) => {
		answersObj.push({ question: `${id}`, answer: `${answers[id].value} answer` });
		return null;
	});
	const res = await Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST,
		{ answers: answersObj, survey });
	if (res) {
		history.push('/');
	}
};
