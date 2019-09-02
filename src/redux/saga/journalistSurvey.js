import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/survey';
import HELPER from '../../utils/helper';

// create user signup request
const GET_SURVEY = function* fetchSurvey() {
	yield takeEvery('GET_SURVEY', function* generateAction(action) {
		yield put(START('GET_SURVEY_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.SURVEY_URL}${action.payload.id}`, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_SURVEY_SUCCESS',
					payload: DATA(toStoreConfig(RES.data)),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_SURVEY_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_SURVEY_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_SURVEY;
