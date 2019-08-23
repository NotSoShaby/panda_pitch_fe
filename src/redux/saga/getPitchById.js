import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import HELPER from '../../utils/helper';
import { START, DATA, ERROR } from '../handler';
import toStoreConfig from '../adapters/pitch';
import history from '../../routes/history';

// create user signup request
const GET_PITCH_BY_ID = function* getPitchById() {
	yield takeEvery('GET_PITCH_BY_ID', function* generateAction(action) {
		yield put(START('GET_PITCH_BY_ID_STARTED'));
		try {
			const RES = yield Request(
				`${CONSTANT.CREATE_PITCH_FORM1_URL}${action.payload}/`,
				CONSTANT.GET, action.payload,
			);
			if (RES.status) {
				const pitchDetail = toStoreConfig(RES.data);
				yield put({
					type: 'GET_PITCH_BY_ID_SUCCESS',
					payload: DATA(pitchDetail),
				});
				history.push('/create_pitch');
			} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
				HELPER.logout();
				yield put({ type: 'LOGOUT' });
			} else {
				yield put({ type: 'GET_PITCH_BY_ID_FAILED', payload: ERROR(RES.data) });
			}
		} catch (error) {
			yield put({ type: 'GET_PITCH_BY_ID_FAILED', payload: error });
		}
	});
};

export default GET_PITCH_BY_ID;
