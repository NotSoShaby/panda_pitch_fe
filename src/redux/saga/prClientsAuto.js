import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';

// create user signup request
const GET_PR_CLIENTS_AUTO = function* fetchSurvey() {
	yield takeEvery('GET_PR_CLIENTS_AUTO', function* generateAction(action) {
		yield put(START('GET_PR_CLIENTS_AUTO_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_PR_CLIENTS_AUTO, CONSTANT.GET, action.payload);
			if (RES.status) {
				yield put({
					type: 'GET_PR_CLIENTS_AUTO_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_PR_CLIENTS_AUTO_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_PR_CLIENTS_AUTO_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_CLIENTS_AUTO;
