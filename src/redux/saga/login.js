import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user login request
const LOGIN = function* perform_checks() {
	yield takeEvery('LOGIN', function*(action) {
		yield put({ type: 'LOGIN_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.LOGIN_URL, CONSTANT.POST, action.payload);
			if (DATA.token) {
				localStorage.setItem('token', DATA.token);
				let data = { ...DATA };
				data.data = { ...data.data };
				yield put({ type: 'LOGIN_SUCCESS', payload: { data: DATA, code: 'SUCCESS' } });
				localStorage.setItem('user', JSON.stringify(data.data));
			} else {
				yield put({ type: 'LOGIN_FAILED', payload: { message: DATA, code: 'ERROR' } });
			}
		} catch (error) {
			yield put({ type: 'LOGIN_FAILED', payload: error });
		}
	});
};

export default LOGIN;
