import { combineReducers } from 'redux';
import { login } from './login';
import { signup } from './signup';
import { journalistProfile } from './journalist';
import { prProfile } from './pr';
import { survey } from './survey';
import { journalistInterests } from './interests';

// Wrap all reducers in a container
const reducer = combineReducers({
	signup,
	login,
	journalistProfile,
	prProfile,
	survey,
	journalistInterests,
});

// module default state for when user logout
const defaultState = {
	login: {},
	signup: {},
	journalistProfile: {},
	prProfile: {},
	survey: {},
	journalistInterests: {},
};

// Empty state when user logout
export default (state, action) => {
	if (action.type === 'LOGOUT') {
		return defaultState;
	} return reducer(state, action);
};
