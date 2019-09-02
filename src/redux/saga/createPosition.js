import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import HELPER from '../../utils/helper';
import { ERROR } from '../handler';
import toStoreConfig from '../adapters/autocomplete';

// create user signup request
const CREATE_POSITION = function* createPosition() {
	yield takeEvery('CREATE_POSITION', function* generateAction(action) {
		try {
			const RES = yield Request(
				CONSTANT.CREATE_POSITION_URL,
				CONSTANT.POST, action.payload,
			);
			if (RES.status) {
				const position = { data: [toStoreConfig(RES.data)] };
				yield put({
					type: 'GET_POSITIONS_SUCCESS',
					payload: position,
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_POSITIONS_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_POSITIONS_FAILED', payload: error });
		}
	});
};

export default CREATE_POSITION;
