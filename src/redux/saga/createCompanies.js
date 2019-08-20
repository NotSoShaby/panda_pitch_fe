import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { ERROR } from '../handler';
// import toStoreConfig from '../adapters/company';
import HELPER from '../../utils/helper';

// create user signup request
const CREATE_PR_COMPANY = function* createCompany() {
	yield takeEvery('CREATE_PR_COMPANY', function* generateAction(action) {
		try {
			const RES = yield Request(
				CONSTANT.CREATE_COMPANIES_URL,
				CONSTANT.POST, action.payload,
			);
			if (RES.status) {
				const company = { data: [{ ...RES.data }] };
				yield put({
					type: 'GET_PR_COMPANIES_SUCCESS',
					payload: company,
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_COMPANY_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_COMPANY_FAILED', payload: error });
		}
	});
};

export default CREATE_PR_COMPANY;
