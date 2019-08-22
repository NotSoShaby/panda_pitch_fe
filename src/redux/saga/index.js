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
import CREATE_A_NEW_CHANNEL from './createChannel';
import { GET_USER_CHANNELS, GET_CHANNEL_BY_ID } from './channels';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all([
		LOGIN(),
		SIGNUP(),
		CREATE_PR_PROFILE(),
		CREATE_JOURNALIST_PROFILE(),
		PR_SURVEY(),
		JOURNALIST_SURVEY(),
		GET_JOURNALIST_INTERESTS(),
		CREATE_JOURNALIST_INTEREST(),
		GET_PR_PITCHES(),
		CREATE_A_NEW_CHANNEL(),
		GET_USER_CHANNELS(),
		GET_CHANNEL_BY_ID(),
	]);
};

export default rootSaga;
