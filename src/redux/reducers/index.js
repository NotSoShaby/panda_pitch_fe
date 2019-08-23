import { combineReducers } from 'redux';
import { login } from './login';
import { journalists } from './journalists';
import { profile, pr } from './pr';
import { survey } from './survey';
import { journalistInterests, interests } from './interests';
import { prPitches } from './pitches';
import { prClientsAuto } from './prClientsAuto';
import { prClient, client, clientAutoComplete } from './prClient';
import { prCompanies } from './company';
import { positions } from './position';
import { createClient } from './clients';
import { createPitch } from './createPitch';
import { mediaList } from './mediaList';
import { pitchDetail } from './pitchDetail';
import { createChannel } from './createChannel';
import { channels, channel } from './channels';

// Wrap all reducers in a container
const reducer = combineReducers({
	login,
	profile,
	survey,
	journalistInterests,
	prPitches,
	createChannel,
	channels,
	channel,
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
	pitchDetail,
});

const initialState = { code: 'UNINITIATED', isLoading: false };

// module default state for when user logout
const defaultState = {
	login: initialState,
	profile: initialState,
	survey: initialState,
	journalistInterests: initialState,
	prPitches: initialState,
	createChannel: initialState,
	channels: initialState,
	channel: initialState,
	prClientsAuto: initialState,
	prClient: initialState,
	mediaList: initialState,
	prCompanies: initialState,
	positions: initialState,
	client: initialState,
	clientAutoComplete: initialState,
	interests: initialState,
	createClientReducer: initialState,
	createPitchReducer: initialState,
	pr: initialState,
	journalists: initialState,
	pitchDetail: initialState,
};

// Empty state when user logout
export default (state, action) => {
	if (
		action.type
    === 'LOGOUT'
	) {
		return defaultState;
	}
	return reducer(
		state,
		action,
	);
};
