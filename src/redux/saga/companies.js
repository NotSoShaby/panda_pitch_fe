import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/autocomplete';
import HELPER from '../../utils/helper';

// create user signup request
const GET_PR_COMPANIES = function* getCompanies() {
	yield takeEvery('GET_PR_COMPANIES', function* generateAction(action) {
		yield put(START('GET_PR_COMPANIES_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_COMPAINES_URL}${action.payload}/`, CONSTANT.GET);
			if (RES.status) {
				const prCompanies = RES.data.map(company => toStoreConfig(company));
				yield put({
					type: 'GET_PR_COMPANIES_SUCCESS',
					payload: DATA(prCompanies),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_PR_COMPANIES_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_PR_COMPANIES_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_COMPANIES;
