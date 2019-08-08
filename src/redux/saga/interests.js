import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_INTERESTS = function* getInterests() {
	yield takeEvery('GET_INTERESTS', function* generateAction() {
		yield put(START('GET_INTEREST_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_INTERESTS_URL, CONSTANT.GET);
			yield put({
				type: 'GET_INTEREST_SUCCESS',
				payload: {
					code: 'SUCCESS',
					data: DATA(RES).data,
				},
			});
		} catch (error) {
			yield put({ type: 'GET_INTEREST_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_INTERESTS;
