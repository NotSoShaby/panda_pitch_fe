import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';
import toStoreConfig from '../adapters/media';
import history from '../../routes/history';

// create user signup request
export const GET_MEDIA_LIST = function* fetchSurvey() {
	yield takeEvery('GET_MEDIA_LIST', function* generateAction() {
		yield put(START('GET_MEDIA_LIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST}`, CONSTANT.GET, '');
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

export const UPDATE_MEDIA_BY_ID = function* fetchSurvey() {
	yield takeEvery('UPDATE_MEDIA_BY_ID', function* generateAction(action) {
		const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST}${action.payload.id}/`, CONSTANT.PATCH, action.payload);
		if (RES.status) {
			if (RES.message === 'OK') {
				yield put({
					type: 'GET_MEDIA_LIST',
				});
			}
		} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
			HELPER.logout();
			yield put({ type: 'LOGOUT' });
		}
	});
};

export const CREATE_MEDIA = function* fetchSurvey() {
	yield takeEvery('CREATE_MEDIA', function* generateAction(action) {
		const RES = yield Request(`${CONSTANT.GET_MEDIA_LIST}`, CONSTANT.POST, action.payload);
		if (RES.status) {
			history.push('/media_list');
			yield put({
				type: 'GET_MEDIA_LIST',
			});
		} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
			HELPER.logout();
			yield put({ type: 'LOGOUT' });
		}
	});
};
