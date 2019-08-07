import { createSelector } from 'reselect';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
// import { getUserId } from './signup';
import store from '../Store';
import history from '../../routes/history';
// import HELPER from '../../utils/helper';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: '',
};


const getJournalistState = (state = store.getState()) => {
	if (state.journalistProfile) {
		return state.journalistProfile;
	}
	return initialState;
};

const getPrState = (state = store.getState()) => {
	if (state.prProfile) {
		return state.prProfile;
	}
	return initialState;
};

export const getJournalistStatus = createSelector(getJournalistState, n => n.data.code);
export const getPrStatus = createSelector(getPrState, n => n.data.code);

export const getSurvey = data => ({ type: 'GET_SURVEY', payload: data });
// export const getPRSurvey = data => ({ type: 'GET_PR_SURVEY', payload: data });

export const surveySubmission = async ({ answers, survey }) => {
	const answersObj = [];
	Object.keys(answers).map((id) => {
		answersObj.push({ question: `${id}`, answer: `${answers[id].value} answer` });
		return null;
	});
	// const payload = {
	// 	user_id: getUserId(),
	// 	question_answer: JSON.stringify(answersObj),
	// };
	const res = await Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST,
		{ answers: answersObj, survey });
	console.log('resssss', res);
	// if (HELPER.isSuccessInApi(res.code)) {
	// 	history.push('/');
	// }
	if (res) {
		history.push('/');
	}
};
