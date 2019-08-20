import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

// create user signup request
const GET_PR_PITCHES = function* getPitches() {
	yield takeEvery('GET_PR_PITCHES', function* getPitches({ payload: { prId, page, pageSize } }) {
		yield put(START('GET_PR_PITCHES_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_PR_PITCHES_URL}?page=${page}&pr_id=${prId}&page_size=${pageSize}`, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_PR_PITCHES_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_PR_PITCHES_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_PR_PITCHES_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_PITCHES;
