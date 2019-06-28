import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

// create user signup request
const CREATE_PR_PROFILE = function* performChecks() {
	yield takeEvery('CREATE_PR_PROFILE', function*(action) {
		yield put(START('CREATE_PR_PROFILE_STARTED'));
		try {
			const RES = yield Request(CONSTANT.CREATE_PR_URL, CONSTANT.POST, action.payload);
      if (RES.code === 'SUCCESS') {
				yield put({ type: 'CREATE_PR_PROFILE_SUCCESS', payload: DATA(RES) });
			}
			if (RES.status) {
				yield put({ type: 'CREATE_PR_PROFILE_FAILED', payload: ERROR(RES.status.message) });
			}
		} catch (error) {
			yield put({ type: 'CREATE_PR_PROFILE_FAILED', payload: ERROR(error) });
		}
	});
};

export default CREATE_PR_PROFILE;