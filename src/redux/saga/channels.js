import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_USER_CHANNELS = function* getChannels() {
	yield takeEvery('GET_USER_CHANNELS', function* generateAction(action) {
		yield put(START('GET_USER_CHANNELS_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_USER_CHANNELS, CONSTANT.GET, action.payload);
			if (RES.code === 'SUCCESS') {
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

export default GET_USER_CHANNELS;
