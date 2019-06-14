import { all } from 'redux-saga/effects';
import LOGIN from './login';
import SIGNUP from './signup';
import CREATE_JOURNALIST_PROFILE from './journalistProfile';
import CREATE_PR_PROFILE from './prProfile';
import PR_SURVEY from './prSurvey';
import JOURNALIST_SURVEY from './journalistSurvey';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all([ LOGIN(), SIGNUP(), CREATE_PR_PROFILE(), CREATE_JOURNALIST_PROFILE(), PR_SURVEY(), JOURNALIST_SURVEY() ]);
};

export default rootSaga;
