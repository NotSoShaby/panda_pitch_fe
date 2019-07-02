import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const CREATE_JOURNALIST_INTEREST = function* createInterest() {
	yield takeEvery('CREATE_JOURNALIST_INTEREST', function* (action) {
		try {
			const DATA = yield Request(
				CONSTANT.CREATE_JOURNALIST_INTEREST_URL,
				CONSTANT.POST, action.payload,
			);
			if (DATA) {
				yield put({
					type: 'GET_JOURNALIST_INTERESTS',
					payload: DATA.name,
				});
			}
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_FAILED', payload: error });
		}
	});
};

export default CREATE_JOURNALIST_INTEREST;
