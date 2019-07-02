import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const SIGNUP = function* performSignup() {
	yield takeEvery('SIGNUP', function* (action) {
		yield put(START('SIGNUP_STARTED'));
		try {
			const RES = yield Request(CONSTANT.SIGNUP_URL, CONSTANT.POST, action.payload);
			if (RES.code === 'SUCCESS') {
				const data = { ...RES };
				data.data = { ...data.data, ...action.props };
				yield put({ type: 'SIGNUP_SUCCESS', payload: DATA(data) });
				localStorage.setItem('user', JSON.stringify(data.data));
			}
			if (RES.status) {
				yield put({ type: 'SIGNUP_FAILED', payload: ERROR(RES.status.message) });
			}
		} catch (error) {
			yield put({ type: 'SIGNUP_FAILED', payload: ERROR(error) });
		}
	});
};

export default SIGNUP;
