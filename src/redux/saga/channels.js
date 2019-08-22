import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
export const GET_USER_CHANNELS = function* getChannels() {
	yield takeEvery('GET_USER_CHANNELS', function* generateAction(action) {
		yield put(START('GET_USER_CHANNELS_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_USER_CHANNELS, CONSTANT.GET, action.payload);
			if (RES) {
				yield put({ type: 'GET_USER_CHANNELS_SUCCESS', payload: DATA(RES) });
			}
			if (RES.status) {
				yield put({ type: 'GET_USER_CHANNELS_FAILED', payload: ERROR(RES.status.message) });
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
				yield put({ type: 'GET_CHANNEL_BY_ID_SUCCESS', payload: DATA(RES) });
			}
			if (RES.status) {
				yield put({ type: 'GET_CHANNEL_BY_ID_FAILED', payload: ERROR(RES.status.message) });
			}
		} catch (error) {
			yield put({ type: 'GET_CHANNEL_BY_ID_FAILED', payload: ERROR(error) });
		}
	});
};
