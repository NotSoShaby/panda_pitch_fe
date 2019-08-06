import { all } from 'redux-saga/effects';
import LOGIN from './login';
import SIGNUP from './signup';
import CREATE_JOURNALIST_PROFILE from './journalistProfile';
import CREATE_PR_PROFILE from './prProfile';
import PR_SURVEY from './prSurvey';
import JOURNALIST_SURVEY from './journalistSurvey';
import GET_JOURNALIST_INTERESTS from './interests';
import CREATE_JOURNALIST_INTEREST from './createInterest';
import GET_PR_PITCHES from './pitches';
import GET_PR_CLIENTS_AUTO from './prClientsAuto';
// import GET_PR_CLIENT from './prClient';
import GET_PR_MEDIALISTS from './prMedialists';
import GET_MEDIALISTS from './mediaLists';
import GET_PR_COMPANIES from './companies';
import CREATE_PR_COMPANY from './createCompanies';
import GET_POSITIONS from './positions';
import CREATE_POSITION from './createPosition';
import GET_CLIENTS from './prClient';
import GET_CLIENTS_AUTOCOMPLETE from './clients';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all(
		[
			LOGIN(),
			SIGNUP(),
			CREATE_PR_PROFILE(),
			CREATE_JOURNALIST_PROFILE(),
			PR_SURVEY(),
			JOURNALIST_SURVEY(),
			GET_JOURNALIST_INTERESTS(),
			CREATE_JOURNALIST_INTEREST(),
			GET_PR_PITCHES(),
			GET_PR_CLIENTS_AUTO(),
			// GET_PR_CLIENT(),
			GET_CLIENTS(),
			GET_PR_MEDIALISTS(),
			GET_MEDIALISTS(),
			GET_PR_COMPANIES(),
			CREATE_PR_COMPANY(),
			GET_POSITIONS(),
			CREATE_POSITION(),
			GET_CLIENTS_AUTOCOMPLETE(),
		],
	);
};

export default rootSaga;
