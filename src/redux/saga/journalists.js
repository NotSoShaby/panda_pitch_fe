import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const FIND_JOURNALIST = function* getInterests() {
	yield takeEvery('FIND_JOURNALIST', function* generateAction(action) {
		yield put(START('FIND_JOURNALIST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.FIND_JOURNALIST_URL}${action.payload}/`, CONSTANT.GET);
			yield put({
				type: 'FIND_JOURNALIST_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'FIND_JOURNALIST_FAILED', payload: ERROR(error) });
		}
	});
};

export default FIND_JOURNALIST;
