import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_PR_PITCHES = function* getPitches() {
	yield takeEvery('GET_PR_PITCHES', function* getPitches() {
		yield put(START('GET_PR_PITCHES_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_PR_PITCHES_URL}`, CONSTANT.GET);
			yield put({
				type: 'GET_PR_PITCHES_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_PR_PITCHES_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_PITCHES;
