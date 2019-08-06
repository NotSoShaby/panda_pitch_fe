import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const GET_PR_COMPANIES = function* getCompanies() {
	yield takeEvery('GET_PR_COMPANIES', function* generateAction(action) {
		yield put(START('GET_PR_COMPANIES_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.GET_COMPAINES_URL}${action.payload}/`, CONSTANT.GET);
			yield put({
				type: 'GET_PR_COMPANIES_SUCCESS',
				payload: DATA(RES),
			});
		} catch (error) {
			yield put({ type: 'GET_PR_COMPANIES_FAILED', payload: ERROR(error) });
		}
	});
};

export default GET_PR_COMPANIES;
