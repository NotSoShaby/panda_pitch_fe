import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/channel';
import HELPER from '../../utils/helper';

// create user signup request
export const GET_USER_CHANNELS = function* getChannels() {
	yield takeEvery('GET_USER_CHANNELS', function* generateAction(action) {
		yield put(START('GET_USER_CHANNELS_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_USER_CHANNELS, CONSTANT.GET, action.payload);
			if (RES.status) {
				const channels = RES.data.map(channel => toStoreConfig(channel));
				yield put({ type: 'GET_USER_CHANNELS_SUCCESS', payload: DATA(channels) });
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_USER_CHANNELS_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_USER_CHANNELS_FAILED', payload: ERROR(error) });
		}
	});
};

export const GET_CHANNEL_BY_ID = function* getChannels() {
	yield takeEvery('GET_CHANNEL_BY_ID', function* generateAction(action) {
		yield put(START('GET_CHANNEL_BY_ID_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.CREATE_CHANNEL}${action.payload}/`, CONSTANT.GET);
			if (RES) {
				yield put({ type: 'GET_CHANNEL_BY_ID_SUCCESS', payload: DATA(toStoreConfig(RES.data)) });
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_CHANNEL_BY_ID_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_CHANNEL_BY_ID_FAILED', payload: ERROR(error) });
		}
	});
};
