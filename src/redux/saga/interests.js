import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

// create user signup request
const GET_INTERESTS = function* getInterests() {
	yield takeEvery('GET_INTERESTS', function* generateAction() {
		yield put(START('GET_INTEREST_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_INTERESTS_URL, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_INTEREST_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_INTEREST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_INTEREST_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_INTERESTS;
