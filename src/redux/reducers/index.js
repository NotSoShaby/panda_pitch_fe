import { combineReducers } from 'redux';
import { login } from './login';
import { signup } from './signup';
import { journalistProfile } from './journalist';
import { prProfile } from './pr';
import { survey } from './survey';
import { journalistInterests } from './interests';
import { prPitches } from './pitches';
import { createChannel } from './createChannel';
import { channels } from './channels';
import history from '../../routes/history';

// Wrap all reducers in a container
const reducer = combineReducers({
	signup,
	login,
	journalistProfile,
	prProfile,
	survey,
	journalistInterests,
	prPitches,
	createChannel,
	channels,
});

const initialState = { code: 'UNINITIATED', isLoading: false };

// module default state for when user logout
const defaultState = {
	login: initialState,
	signup: initialState,
	journalistProfile: initialState,
	prProfile: initialState,
	survey: initialState,
	journalistInterests: initialState,
	prPitches: initialState,
	createChannel: initialState,
	channels: initialState,
};

// Empty state when user logout
export default (state, action) => {
	if (action.type === 'LOGOUT') {
		history.push('/login');
		window.location.reload(true);
		return defaultState;
	} return reducer(state, action);
};
