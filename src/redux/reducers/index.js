import { combineReducers } from 'redux';
// import { login } from './user';
// import { signup } from './signup';
import { login } from './login';
import { journalistProfile } from './journalist';
import { journalists } from './journalists';
import { prProfile, pr } from './pr';
import { survey } from './survey';
import { journalistInterests, interests } from './interests';
import { prPitches } from './pitches';
import { prClientsAuto } from './prClientsAuto';
import { prClient, client, clientAutoComplete } from './prClient';
// import { prMediaList } from './prMedialist';
// import history from '../../routes/history';
import { prCompanies } from './company';
import { positions } from './position';
import { createClient } from './clients';
import { createPitch } from './createPitch';
import { mediaList } from './mediaList';

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
	mediaList,
	prCompanies,
	positions,
	client,
	clientAutoComplete,
	interests,
	createClientReducer: createClient,
	createPitchReducer: createPitch,
	pr,
	journalists,
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
	mediaList: initialState,
	prCompanies: initialState,
	positions: initialState,
	client: initialState,
	getClientsAuto: initialState,
	clientAutoComplete: initialState,
	interests: initialState,
	createClientReducer: initialState,
	createPitchReducer: initialState,
	pr: initialState,
	journalists: initialState,
};

// Empty state when user logout
export default (state, action) => {
	if (
		action.type
    === 'LOGOUT'
	) {
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
