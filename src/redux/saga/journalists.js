import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

// create user signup request
const FIND_JOURNALIST = function* getInterests() {
	yield takeEvery('FIND_JOURNALIST', function* generateAction(action) {
		yield put(START('FIND_JOURNALIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.FIND_JOURNALIST_URL}${action.payload}`, CONSTANT.GET);
			if (RES.status) {
				yield put({
					type: 'FIND_JOURNALIST_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(error) });
		}
	});
};

export default FIND_JOURNALIST;
