import { all } from 'redux-saga/effects';
import LOGIN from './login';
import SIGNUP from './signup';
import CREATE_USER_PROFILE from './profile';
import PR_SURVEY from './prSurvey';
import JOURNALIST_SURVEY from './journalistSurvey';
import GET_JOURNALIST_INTERESTS from './journalistInterests';
import CREATE_JOURNALIST_INTEREST from './createInterest';
import GET_PR_PITCHES from './pitches';
import GET_PR_CLIENTS_AUTO from './prClientsAuto';
import { GET_MEDIA_LIST, GET_MEDIA_LIST_AUTOCOMPLETE, UPDATE_MEDIA_BY_ID } from './mediaList';
import GET_PR_COMPANIES from './companies';
import CREATE_PR_COMPANY from './createCompanies';
import GET_POSITIONS from './positions';
import CREATE_POSITION from './createPosition';
import GET_CLIENTS from './prClient';
import GET_CLIENTS_AUTOCOMPLETE from './clients';
import GET_INTERESTS from './interests';
import CREATE_CLIENT from './createClient';
import CREATE_PITCH_FORM1 from './createPitchForm1';
import CREATE_PITCH_FORM2 from './createPitchForm2';
import CREATE_PITCH_FORM3 from './createPitchForm3';
import FIND_JOURNALIST_URL from './journalists';
import GET_PITCH_BY_ID from './getPitchById';
import CREATE_A_NEW_CHANNEL from './createChannel';
import { GET_USER_CHANNELS, GET_CHANNEL_BY_ID } from './channels';
import GET_USER_BY_ID from './getUserById';
import GET_LOGGED_IN_USER_PROFILE from './getLoggedInUserprofile';
import LOGOUT from './logout';
import DELETE_PITCH_BY_ID from './deletePitch';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all(
		[
			LOGIN(),
			SIGNUP(),
			CREATE_USER_PROFILE(),
			PR_SURVEY(),
			JOURNALIST_SURVEY(),
			GET_JOURNALIST_INTERESTS(),
			CREATE_JOURNALIST_INTEREST(),
			GET_PR_PITCHES(),
			GET_PR_CLIENTS_AUTO(),
			GET_CLIENTS(),
			GET_MEDIA_LIST(),
			GET_PR_COMPANIES(),
			CREATE_PR_COMPANY(),
			GET_POSITIONS(),
			CREATE_POSITION(),
			GET_CLIENTS_AUTOCOMPLETE(),
			GET_INTERESTS(),
			CREATE_CLIENT(),
			FIND_JOURNALIST_URL(),
			CREATE_PITCH_FORM1(),
			CREATE_PITCH_FORM2(),
			CREATE_PITCH_FORM3(),
			GET_PITCH_BY_ID(),
			CREATE_A_NEW_CHANNEL(),
			GET_USER_CHANNELS(),
			GET_CHANNEL_BY_ID(),
			GET_LOGGED_IN_USER_PROFILE(),
			GET_USER_BY_ID(),
			GET_MEDIA_LIST_AUTOCOMPLETE(),
			DELETE_PITCH_BY_ID(),
			LOGOUT(),
			GET_USER_BY_ID(),
			UPDATE_MEDIA_BY_ID(),
		],
	);
};

export default rootSaga;
