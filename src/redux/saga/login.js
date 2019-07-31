import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';
import toStoreConfig from '../adapters/login';

// create user login request
const LOGIN = function* performLogin() {
	yield takeEvery('LOGIN', function* generateAction(action) {
		yield put(START('LOGIN_STARTED'));
		try {
			const RES = yield Request(CONSTANT.LOGIN_URL, CONSTANT.POST, action.payload, false);
			if (RES.token) {
				const login = toStoreConfig(RES);
				localStorage.setItem('token', login.token);
				yield put({ type: 'LOGIN_SUCCESS', payload: DATA(login) });
				// localStorage.setItem('user', JSON.stringify(RES.user));
				history.push('/');
			} else {
				yield put({ type: 'LOGIN_FAILED', payload: ERROR(RES) });
			}
		} catch (error) {
			yield put({ type: 'LOGIN_FAILED', payload: ERROR(error) });
		}
	});
};

export default LOGIN;
