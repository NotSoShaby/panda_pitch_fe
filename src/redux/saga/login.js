import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user login request
const LOGIN = function* perform_checks() {
	yield takeEvery('LOGIN', function*(action) {
		yield put({ type: 'LOGIN_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.SIGN_URL, CONSTANT.POST, action.payload);
			localStorage.setItem('token', DATA.token);
			localStorage.setItem('role', 'client');
			yield put({ type: 'LOGIN_SUCCESS', payload: DATA });
		} catch (error) {
			yield put({ type: 'LOGIN_FAILED', payload: error });
		}
	});
};

export default LOGIN;
