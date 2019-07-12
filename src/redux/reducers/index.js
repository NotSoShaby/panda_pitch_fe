import { combineReducers } from 'redux';
// import { login } from './user';
// import { signup } from './signup';
import { login } from './login';
import { journalistProfile } from './journalist';
import { prProfile } from './pr';
import { survey } from './survey';
import { journalistInterests } from './interests';
import { prPitches } from './pitches';
import { prClientsAuto } from './prClientsAuto';
import { prClient } from './prClient';
import { prMedialists } from './prMedialists';
import history from '../../routes/history';

// Wrap all reducers in a container
const reducer = combineReducers({
	// signup,
	// login,
	login,
	journalistProfile,
	prProfile,
	survey,
	journalistInterests,
	prPitches,
	prClientsAuto,
	prClient,
	prMedialists,
});

const initialState = { code: 'UNINITIATED', isLoading: false };

// module default state for when user logout
const defaultState = {
	// login: initialState,
	// signup: initialState,
	login: initialState,
	journalistProfile: initialState,
	prProfile: initialState,
	survey: initialState,
	journalistInterests: initialState,
	prPitches: initialState,
	prClientsAuto: initialState,
	prClient: initialState,
	prMedialists: initialState,
};

// Empty state when user logout
export default (state, action) => {
	if (
		action.type
		=== 'LOGOUT'
	) {
		history.push(
			'/login',
		);
		window.location.reload(
			true,
		);
		return defaultState;
	}
	return reducer(
		state,
		action,
	);
};
