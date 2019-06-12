import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const SIGNUP = function* performChecks() {
	yield takeEvery('SIGNUP', function*(action) {
		yield put({ type: 'SIGNUP_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.SIGN_URL, CONSTANT.POST, action.payload);
			if (DATA.code === 'SUCCESS') {
				yield put({ type: 'SIGNUP_SUCCESS', payload: DATA });
				localStorage.setItem('user', JSON.stringify(DATA.data));
			}
			if (DATA.status) {
				yield put({ type: 'SIGNUP_FAILED', payload: DATA.status });
			}
		} catch (error) {
			yield put({ type: 'SIGNUP_FAILED', payload: error });
		}
	});
};

export default SIGNUP;
