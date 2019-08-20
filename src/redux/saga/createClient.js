import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

const CREATE_CLIENT = function* fetchSurvey() {
	yield takeEvery('CREATE_CLIENT', function* generateAction(action) {
		yield put(START('CREATE_CLIENT_STARTED'));
		try {
			const RES = yield Request(
				CONSTANT.CREATE_CLIENT_URL, CONSTANT.POST, action.payload, undefined, undefined, true,
			);
			console.log('sdada', RES);
			if (RES.status) {
				yield put({
					type: 'CREATE_CLIENT_SUCCESS',
					payload: DATA(RES.data),
				});
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				localStorage.clear();
				history.push('/login');
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'CREATE_CLIENT_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'CREATE_CLIENT_FAILED', payload: ERROR(error) });
		}
	});
};

// export default CREATE_CLIENT;
export default CREATE_CLIENT;
