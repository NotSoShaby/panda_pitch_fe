import { all } from 'redux-saga/effects';
import LOGIN from './login';
import SIGNUP from './signup';
import CREATE_JOURNALIST_PROFILE from './createJournalist';
import CREATE_PR_PROFILE from './createPr';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all([ LOGIN(), SIGNUP(), CREATE_PR_PROFILE(), CREATE_JOURNALIST_PROFILE() ]);
};

export default rootSaga;
