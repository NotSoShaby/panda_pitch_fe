import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_MEDIALISTS = function* fetchSurvey() {
	yield takeEvery('GET_MEDIALISTS', function* generateAction(action) {
		yield put(START('GET_MEDIALISTS_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_MEDIALISTS, CONSTANT.GET, action.payload);
			yield put({
				type: 'GET_MEDIALISTS_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_MEDIALISTS_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_MEDIALISTS;
