import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';
import toStoreConfig from '../adapters/media';

// create user signup request
export const GET_MEDIA_LIST = function* fetchSurvey() {
	yield takeEvery('GET_MEDIA_LIST', function* generateAction() {
		yield put(START('GET_MEDIA_LIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST}`, CONSTANT.GET, '', true, 'http://18.191.42.149:8000');
			if (RES.status) {
				const mediaList = RES.data.map(media => toStoreConfig(media));
				yield put({
					type: 'GET_MEDIA_LIST_SUCCESS',
					payload: DATA(mediaList),
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

export const GET_MEDIA_LIST_AUTOCOMPLETE = function* fetchSurvey() {
	yield takeEvery('GET_MEDIA_LIST_AUTOCOMPLETE', function* generateAction(action) {
		yield put(START('GET_MEDIA_LIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST_AUTOCOMPLETE}${action.payload}`, CONSTANT.GET);
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
