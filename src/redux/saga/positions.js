import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_POSITIONS = function* getCompanies() {
	yield takeEvery('GET_POSITIONS', function* generateAction(action) {
		yield put(START('GET_POSITIONS_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_POSITIONS_URL}${action.payload}/`, CONSTANT.GET);
			yield put({
				type: 'GET_POSITIONS_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_POSITIONS_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_POSITIONS;
