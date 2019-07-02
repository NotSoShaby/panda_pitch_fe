import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user login request
const LOGIN = function* performLogin() {
	yield takeEvery('LOGIN', function* (action) {
		yield put(START('LOGIN_STARTED'));
		try {
			const RES = yield Request(CONSTANT.LOGIN_URL, CONSTANT.POST, action.payload);
			if (RES.token) {
				localStorage.setItem('token', RES.token);
				const data = { ...RES };
				data.data = { ...RES.data };
				yield put({ type: 'LOGIN_SUCCESS', payload: DATA(RES) });
				localStorage.setItem('user', JSON.stringify(data.data));
			} else {
				yield put({ type: 'LOGIN_FAILED', payload: ERROR(RES) });
			}
		} catch (error) {
			yield put({ type: 'LOGIN_FAILED', payload: ERROR(error) });
		}
	});
};

export default LOGIN;
