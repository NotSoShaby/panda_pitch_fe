import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';
import toStoreConfig from '../adapters/profile';
import HELPER from '../../utils/helper';

// create user signup request
const CREATE_JOURNALIST_PROFILE = function* createJournalist() {
	yield takeEvery('CREATE_JOURNALIST_PROFILE', function* generateAction(action) {
		yield put(START('CREATE_JOURNALIST_PROFILE_STARTED'));
		try {
			const RES = yield Request(CONSTANT.CREATE_JOURNALIST_URL, CONSTANT.POST, action.payload);
			if (RES.status) {
				yield put({ type: 'CREATE_JOURNALIST_PROFILE_SUCCESS', payload: DATA(toStoreConfig(RES.data)) });
				history.push('/survey');
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'CREATE_JOURNALIST_PROFILE_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'CREATE_JOURNALIST_PROFILE_FAILED', payload: ERROR(error) });
		}
	});
};

export default CREATE_JOURNALIST_PROFILE;
