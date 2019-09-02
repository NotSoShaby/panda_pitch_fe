import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import HELPER from '../../utils/helper';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/profile';

// create user signup request
const GET_USER_BY_ID = function* getUserById() {
	yield takeEvery('GET_USER_BY_ID', function* generateAction(action) {
		yield put(START('GET_USER_BY_ID_STARTED'));
		try {
			const RES = yield Request(
				`${CONSTANT.CREATE_PR_URL}${action.payload}/`,
				CONSTANT.GET, action.payload,
			);
			if (RES.status) {
				yield put({
					type: 'GET_USER_BY_ID_SUCCESS',
					payload: DATA(toStoreConfig(RES.data)),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_USER_BY_ID_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_USER_BY_ID_FAILED', payload: error });
		}
	});
};

export default GET_USER_BY_ID;
