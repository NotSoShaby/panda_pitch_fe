import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_JOURNALIST_INTERESTS = function* getInterests() {
	yield takeEvery('GET_JOURNALIST_INTERESTS', function* generateAction(action) {
		yield put(START('GET_JOURNALIST_INTEREST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_JOURNALIST_INTERESTS_URL}${action.payload}/`, CONSTANT.GET);
			yield put({
				type: 'GET_JOURNALIST_INTEREST_SUCCESS',
				payload: {
					code: 'SUCCESS',
					data: DATA(RES).data,
				},
			});
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_JOURNALIST_INTERESTS;
