import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/profile';
import HELPER from '../../utils/helper';
import history from '../../routes/history';

// create user signup request
const GET_LOGGED_IN_USER_PROFILE = function* getLoggedInUserById() {
	yield takeEvery('GET_LOGGED_IN_USER_PROFILE', function* generateAction(action) {
		yield put(START('CREATE_USER_PROFILE_STARTED'));
		try {
			const RES = yield Request(
				`${CONSTANT.LOGGED_IN_PROFILE}`,
				CONSTANT.GET, action.payload,
			);
			if (RES.message === 'Not Found' && RES.status === false) {
				history.push('/not_found', RES.message);
			}
			if (RES.status) {
				yield put({
					type: 'CREATE_USER_PROFILE_SUCCESS',
					payload: DATA(toStoreConfig(RES.data)),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'CREATE_USER_PROFILE_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'CREATE_USER_PROFILE_FAILED', payload: error });
		}
	});
};
export default GET_LOGGED_IN_USER_PROFILE;
