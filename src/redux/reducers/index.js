import { combineReducers } from 'redux';
import { login } from './login';
import { signup } from './signup';

// Wrap all reducers in a container
const reducer = combineReducers({
	signup,
	login
});

//module default state for when user logout
const defaultState = {
	login: {},
	signup: {}
};

// Empty state when user logout
export default (state, action) => {
	if (action.type === 'LOGOUT') {
		return defaultState;
	} else return reducer(state, action);
};
