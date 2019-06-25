import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const GET_SURVEY = function* performChecks() {
	yield takeEvery('GET_JOURNALIST_SURVEY', function*(action) {
		yield put({ type: 'SURVEY_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.SURVEY_JOR_URL, CONSTANT.GET, action.payload);
			yield put({
				type: 'GET_SURVEY_SUCCESS',
				payload: {
					CODE: 'SUCCESS',
					data: DATA
				}
			});
		} catch (error) {
			yield put({ type: 'GET_SURVEY_FAILED', payload: error });
		}
	});
};

export default GET_SURVEY;
