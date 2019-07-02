import Request from '../../redux/ApiCaller';
import CONSTANT from '../../utils/constant';
import { getUserId } from './signup';
import store from '../Store';
import { createSelector } from 'reselect';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: ''
};


const getJournalistState = (state = store.getState()) => {
	if (state.journalistProfile) {
		return state.journalistProfile;
	} else {
		return initialState;
	}
};

const getPrState = (state = store.getState()) => {
	if (state.prProfile) {
		return state.prProfile;
	} else {
		return initialState;
	}
};

export const getJournalistStatus = createSelector(getJournalistState, (n) => n.data.code);
export const getPrStatus = createSelector(getPrState, (n) => n.data.code);

export const getJRSurvey = () => ({type:'GET_JOURNALIST_SURVEY'});
export const getPRSurvey = () => ({type:'GET_PR_SURVEY'});

export const surveySubmission = async ({ answers }) => {
	let answersObj = {};
	Object.keys(answers).map((id) => (answersObj[`${id}`] = `${answers[id].value} answer`));
	let payload = {
		user_id: getUserId(),
		question_answer: JSON.stringify(answersObj) 
	};
	return Request(CONSTANT.SURVEY_SUBMISSION_URL, CONSTANT.POST, payload);
};
