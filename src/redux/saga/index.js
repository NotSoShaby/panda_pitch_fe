import { all } from 'redux-saga/effects';
import LOGIN from './login';
import SIGNUP from './signup';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
	yield all([ LOGIN(), SIGNUP() ]);
};

export default rootSaga;
