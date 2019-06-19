import { createSelector } from 'reselect';
import HELPER from '../../utils/helper';
import store from '../Store';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: '',
};

const getSignupState = (state = store.getState()) => {
	if (state.signup) {
		return state.signup;
	}
	return initialState;
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

export const getUserId = createSelector(getSignupState, n => n.data.user_id);
export const getUserRole = createSelector(getSignupState, n => n.data.role);

export const getJournalistStatus = createSelector(getJournalistState, n => n.data.code);
export const getPrStatus = createSelector(getPrState, n => n.data.code);

export const signUp = ({
	email, password, fullName, role,
}) => ({
	type: 'SIGNUP',
	payload: {
		email,
		password,
		full_name: fullName,
	},
	props: {
		role,
	},
});

export const createPrProfile = ({
	position, company, linkedIn, twitter,
}) => ({
	type: 'CREATE_PR_PROFILE',
	payload: {
		user_id: getUserId(),
		company,
		position,
		linkedin_url: linkedIn || '',
		twitter_url: twitter || '',
	},
});

export const createJournalistProfile = ({
	position, outlet, topics, twitter,
}) => {
	let topicList = '';
	topics.map((item) => {
		if (topicList === '') topicList = item;
		else topicList = `${topicList},${item}`;
		return null;
	});
	return {
		type: 'CREATE_JOURNALIST_PROFILE',
		payload: {
			user_id: getUserId(),
			outlet,
			position,
			topics: topicList,
			twitter_url: twitter || '',
		},
	};
};

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

export const getJournalistInterests = () => ({ type: 'GET_JOURNALIST_INTERESTS' });
