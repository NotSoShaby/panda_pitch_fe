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

export const createJournalistProfile = ({ position, outlet, topics, twitter }) => ({
	type: 'CREATE_JOURNALIST_PROFILE',
	payload: {
		user_id: getUserId(),
		outlet: outlet,
		position: position,
		topics: topics,
		twitter_url: twitter ? twitter : ''
	}
});

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
