import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';
import toStoreConfig from '../adapters/profile';

// create user signup request
export const FIND_JOURNALIST = function* getInterests() {
	yield takeEvery('FIND_JOURNALIST', function* generateAction(action) {
		yield put(START('FIND_JOURNALIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.FIND_JOURNALIST_URL}${action.payload}`, CONSTANT.GET);
			if (RES.status) {
				const journalists = RES.data.map(journalist => toStoreConfig(journalist));
				yield put({
					type: 'FIND_JOURNALIST_SUCCESS',
					payload: DATA(journalists),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(error) });
		}
	});
};

export const GET_JOURNALISTS = function* getJournalists() {
	yield takeEvery('GET_JOURNALISTS', function* generateAction() {
		yield put(START('FIND_JOURNALIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_JOURNALISTS}`, CONSTANT.GET);
			if (RES.status) {
				const journalists = RES.data.map(journalist => toStoreConfig(journalist));
				yield put({
					type: 'FIND_JOURNALIST_SUCCESS',
					payload: DATA(journalists),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(error) });
		}
	});
};
