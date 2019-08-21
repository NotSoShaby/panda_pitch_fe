import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

const CREATE_PITCH_FORM3 = function* fetchSurvey() {
	yield takeEvery('CREATE_PITCH_FORM3', function* generateAction(action) {
		yield put(START('CREATE_PITCH_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.CREATE_PITCH_FORM1_URL}${action.payload}/`, CONSTANT.PATCH, { status: true }, undefined, undefined, true);
			if (RES.status) {
				yield put({
					type: 'CREATE_PITCH_FORM3_SUCCESS',
					payload: DATA(RES.data),
				});
				history.push('/');
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'CREATE_PITCH_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'CREATE_PITCH_FAILED', payload: ERROR(error) });
		}
	});
};

// export default CREATE_CLIENT;
export default CREATE_PITCH_FORM3;
