import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

const GET_PR = function* fetchSurvey() {
	yield takeEvery('GET_PR', function* generateAction() {
		yield put(START('GET_PR_STARTED'));
		try {
			const RES = yield Request(CONSTANT.GET_PR_URL, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_PR_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_PR_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_PR_FAILED', payload: ERROR(error) });
		}
	});
};

// export default GET_PR;
export default GET_PR;
