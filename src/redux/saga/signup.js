import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const SIGNUP = function* performChecks() {
	yield takeEvery('SIGNUP', function*(action) {
		yield put({ type: 'SIGNUP_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.SIGN_URL, CONSTANT.POST, action.payload);
			if (DATA.token) {
				localStorage.setItem('token', DATA.token);
				localStorage.setItem('role', 'client');
				yield put({ type: 'SIGNUP_SUCCESS', payload: DATA.token });
			} else yield put({ type: 'SIGNUP_FAILED', payload: { msg: 'Token is not defined' } });
		} catch (error) {
			yield put({ type: 'SIGNUP_FAILED', payload: error });
		}
	});
};

export default SIGNUP;
