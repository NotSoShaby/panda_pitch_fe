import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const CREATE_A_NEW_CHANNEL = function* createChannel() {
	yield takeEvery('CREATE_CHANNEL', function* generateAction(action) {
		yield put(START('CREATE_CHANNEL_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.CREATE_CHANNEL}`, CONSTANT.POST, action.payload);
			yield put({
				type: 'CREATE_CHANNEL_SUCCESS',
				payload: {
					code: 'SUCCESS',
					data: DATA(RES),
				},
			});
		} catch (error) {
			yield put({ type: 'CREATE_CHANNEL_FAILED', payload: ERROR(error) });
		}
	});
};

export default CREATE_A_NEW_CHANNEL;
