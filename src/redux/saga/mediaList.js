import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';

// create user signup request
const GET_MEDIA_LIST = function* fetchSurvey() {
	yield takeEvery('GET_MEDIA_LIST', function* generateAction(action) {
		yield put(START('GET_MEDIA_LIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST}${action.payload}`, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_MEDIA_LIST_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_MEDIA_LIST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_MEDIA_LIST_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_MEDIA_LIST;
