import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const GET_JOURNALIST_INTERESTS = function* performChecks() {
	yield takeEvery('GET_JOURNALIST_INTERESTS', function* getJournalistInterests(action) {
		yield put({ type: 'GET_JOURNALIST_STARTED' });
		try {
			const DATA = yield Request(
				CONSTANT.GET_JOURNALIST_INTERESTS_URL,
				CONSTANT.GET,
				action.payload,
			);
			yield put({
				type: 'GET_JOURNALIST_SUCCESS',
				payload: {
					code: 'SUCCESS',
					data: DATA,
				},
			});
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_FAILED', payload: error });
		}
	});
};

export default GET_JOURNALIST_INTERESTS;
