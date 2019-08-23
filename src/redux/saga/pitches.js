import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStorePitchConfig from '../adapters/pitch';
import toStorePaginationConfig from '../adapters/pagination';
import HELPER from '../../utils/helper';

// create user signup request
const GET_PR_PITCHES = function* getPitches() {
	yield takeEvery('GET_PR_PITCHES', function* getPitches({ payload: { page, pageSize, isJournalist } }) {
		yield put(START('GET_PR_PITCHES_STARTED'));
		try {
			const RES = yield Request(`
				${isJournalist ? CONSTANT.GET_JR_PITCHES_URL : CONSTANT.GET_PR_PITCHES_URL}?offset=${page}&limit=${pageSize}
			`, CONSTANT.GET);
			if (RES.status) {
				const pitches = yield toStorePaginationConfig({
					...RES.data,
					results: RES.data.results.map((pitch = {}) => toStorePitchConfig(pitch)),
				});
				yield put({
					type: 'GET_PR_PITCHES_SUCCESS',
					payload: DATA(pitches),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
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
