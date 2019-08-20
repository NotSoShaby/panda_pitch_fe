import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

const GET_CLIENTS_AUTOCOMPLETE = function* fetchSurvey() {
	yield takeEvery('GET_CLIENTS_AUTOCOMPLETE', function* generateAction(action) {
		yield put(START('GET_CLIENTS_AUTOCOMPLETE_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_CLIENTS_AUTOCOMPLETE_URL}${action.payload}/`, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'GET_CLIENTS_AUTOCOMPLETE_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_CLIENTS_AUTOCOMPLETE_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_CLIENTS_AUTOCOMPLETE_FAILED', payload: ERROR(error) });
		}
	});
};

// export default GET_CLIENTS_AUTOCOMPLETE;
export default GET_CLIENTS_AUTOCOMPLETE;
