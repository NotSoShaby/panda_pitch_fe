import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const CREATE_JOURNALIST_INTEREST = function* createInterest() {
	yield takeEvery('CREATE_JOURNALIST_INTEREST', function* generateAction(action) {
		try {
			const DATA = yield Request(
				CONSTANT.CREATE_JOURNALIST_INTEREST_URL,
				CONSTANT.POST, action.payload,
			);
			if (DATA) {
				const interest = { data: [{ ...DATA }] };
				yield put({
					type: 'GET_JOURNALIST_INTEREST_SUCCESS',
					payload: interest,
				});
			}
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: error });
		}
	});
};

export default CREATE_JOURNALIST_INTEREST;
