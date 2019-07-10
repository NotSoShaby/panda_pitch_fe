import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_PR_CLIENTS_AUTO = function* fetchSurvey() {
	yield takeEvery('GET_PR_CLIENTS_AUTO', function* generateAction(action) {
		yield put(START('GET_PR_CLIENTS_AUTO_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_PR_CLIENTS_AUTO, CONSTANT.GET, action.payload);
			yield put({
				type: 'GET_PR_CLIENTS_AUTO_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_PR_CLIENTS_AUTO_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_CLIENTS_AUTO;
