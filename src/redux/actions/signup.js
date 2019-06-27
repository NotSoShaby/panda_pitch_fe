import HELPER from '../../utils/helper';
import { createSelector } from 'reselect';
import store from '../Store';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: ''
};

const getSignupState = (state = store.getState()) => {
	if (state.signup) {
		return state.signup;
	} else {
		return initialState;
	}
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

export const getUserId = createSelector(getSignupState, (n) => n.data.user_id);
export const getUserRole = createSelector(getSignupState, (n) => n.data.role);

export const getJournalistStatus = createSelector(getJournalistState, (n) => n.data.code);
export const getPrStatus = createSelector(getPrState, (n) => n.data.code);

export const signUp = ({ email, password, fullName, role }) => ({
	type: 'SIGNUP',
	payload: {
		email,
		password,
		full_name: fullName
	},
	props: {
		role: role
	}
});

export const createPrProfile = ({ position, company, linkedIn, twitter, userId }) => {
	return {
		type: 'CREATE_PR_PROFILE',
		payload: {
			user_id: getUserId(),
			company: company,
			position: position,
			linkedin_url: linkedIn ? linkedIn : '',
			twitter_url: twitter ? twitter : ''
		}
	};
};

export const createJournalistProfile = ({ position, outlet, topics, twitter }) => {
	let topicList = '';
	topics.map((item) => {
		if (topicList === '') topicList = item;
		else topicList = topicList + ',' + item;
		return null;
	});
	return {
		type: 'CREATE_JOURNALIST_PROFILE',
		payload: {
			user_id: getUserId(),
			outlet: outlet,
			position: position,
			topics: topicList,
			twitter_url: twitter ? twitter : ''
		}
	};
};

export const getJournalistInterests = (data) => ({ type: 'GET_JOURNALIST_INTERESTS', payload:data });

export const createInterest = (data) => ({type:'CREATE_JOURNALIST_INTEREST', payload:{name:data}})