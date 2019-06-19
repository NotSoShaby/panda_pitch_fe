import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const CREATE_PR_PROFILE = function* performChecks() {
	yield takeEvery('CREATE_PR_PROFILE', function* createPrProfile(action) {
		yield put({ type: 'CREATE_PR_PROFILE_STARTED' });
		try {
			const DATA = yield Request(CONSTANT.CREATE_PR_URL, CONSTANT.POST, action.payload);
			if (DATA.code === 'SUCCESS') {
				yield put({ type: 'CREATE_PR_PROFILE_SUCCESS', payload: DATA });
			}
			if (DATA.status) {
				yield put({ type: 'CREATE_PR_PROFILE_FAILED', payload: DATA.status });
			}
		} catch (error) {
			yield put({ type: 'CREATE_PR_PROFILE_FAILED', payload: error });
		}
	});
};

export default CREATE_PR_PROFILE;
