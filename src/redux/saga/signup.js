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
			if (RES.token) {
				localStorage.setItem('token', signup.token);
				localStorage.setItem('user', JSON.stringify(signup));
				yield put({ type: 'SIGNUP_SUCCESS', payload: DATA(signup) });
			} else {
				yield put({ type: 'SIGNUP_FAILED', payload: ERROR(RES) });
			}
		} catch (error) {
			yield put({ type: 'SIGNUP_FAILED', payload: ERROR(error) });
		}
	});
};

export default SIGNUP;
