import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import HELPER from '../../utils/helper';
import toStoreConfig from '../adapters/autocomplete';

// create user signup request
const GET_JOURNALIST_INTERESTS = function* getInterests() {
	yield takeEvery('GET_JOURNALIST_INTERESTS', function* generateAction(action) {
		yield put(START('GET_JOURNALIST_INTEREST_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_JOURNALIST_INTERESTS_URL}${action.payload}/`, CONSTANT.GET);
			if (RES.status) {
				const journalistInterests = RES.data.map(interest => toStoreConfig(interest));
				yield put({
					type: 'GET_JOURNALIST_INTEREST_SUCCESS',
					payload: DATA(journalistInterests),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_JOURNALIST_INTEREST_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_JOURNALIST_INTERESTS;
