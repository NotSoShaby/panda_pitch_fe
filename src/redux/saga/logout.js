import { put, takeEvery } from 'redux-saga/effects';
import HELPER from '../../utils/helper';

// create user signup request
const LOGOUT = function* fetchSurvey() {
	yield takeEvery('LOGOUT', function* generateAction() {
		yield put({ type: 'LOGOUT_SUCCESS' });
		HELPER.logout();
	});
};

export default LOGOUT;
