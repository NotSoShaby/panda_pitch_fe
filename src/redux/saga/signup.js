import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/login';

// create user signup request
const SIGNUP = function* performSignup() {
	yield takeEvery('SIGNUP', function* generateAction(action) {
		yield put(START('SIGNUP_STARTED'));
		try {
			const RES = yield Request(CONSTANT.SIGNUP_URL, CONSTANT.POST, action.payload, false);
			const signup = toStoreConfig(RES);
			console.log('signup==========>', signup);
			localStorage.setItem('token', signup.token);
			yield put({ type: 'SIGNUP_SUCCESS', payload: DATA(signup) });
			// localStorage.setItem('user', JSON.stringify(RES.user));
		} catch (error) {
			yield put({ type: 'SIGNUP_FAILED', payload: ERROR(error) });
		}
	});
};

export default SIGNUP;
