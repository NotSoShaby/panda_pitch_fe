import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import HELPER from '../../utils/helper';
import { ERROR } from '../handler';

// create user signup request
const CREATE_JOURNALIST_INTEREST = function* createInterest() {
	yield takeEvery('CREATE_JOURNALIST_INTEREST', function* generateAction(action) {
		try {
			const RES = yield Request(
				CONSTANT.CREATE_JOURNALIST_INTEREST_URL,
				CONSTANT.POST, action.payload,
			);
			if (RES.status) {
				const interest = { data: [{ ...RES.data }] };
				yield put({
					type: 'GET_JOURNALIST_INTEREST_SUCCESS',
					payload: interest,
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: error });
		}
	});
};

export default CREATE_JOURNALIST_INTEREST;
