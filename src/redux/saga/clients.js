import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

const GET_CLIENTS_AUTOCOMPLETE = function* fetchSurvey() {
	yield takeEvery('GET_CLIENTS_AUTOCOMPLETE', function* generateAction(action) {
		yield put(START('GET_CLIENTS_AUTOCOMPLETE_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_CLIENTS_AUTOCOMPLETE_URL}${action.payload}/`, CONSTANT.GET);
			yield put({
				type: 'GET_CLIENTS_AUTOCOMPLETE_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_CLIENTS_AUTOCOMPLETE_FAILED', payload: ERROR(error) });
		}
	});
};

// export default GET_CLIENTS_AUTOCOMPLETE;
export default GET_CLIENTS_AUTOCOMPLETE;
