import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_SURVEY = function* fetchSurvey() {
	yield takeEvery('GET_JOURNALIST_SURVEY', function* (action) {
		yield put(START('GET_SURVEY_STARTED'));
		try {
			const RES = yield Request(CONSTANT.SURVEY_JOR_URL, CONSTANT.GET, action.payload);
			yield put({
				type: 'GET_SURVEY_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_SURVEY_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_SURVEY;
