import { put, takeEvery } from 'redux-saga/effects';
import Request from '../multipartApiCallier';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';
import history from '../../routes/history';

const CREATE_PITCH_FORM3 = function* fetchSurvey() {
	yield takeEvery('CREATE_PITCH_FORM3', function* generateAction(action) {
		yield put(START('CREATE_PITCH_STARTED'));
		try {
			const RES = yield Request(`${CONSTANT.CREATE_PITCH_FORM1_URL}${action.payload}/`, CONSTANT.PATCH);
			if (RES) {
				yield put({
					type: 'CREATE_PITCH_FORM3_SUCCESS',
					payload: DATA(RES),
				});
				history.push('/');
			} else yield put({ type: 'CREATE_PITCH_FAILED', payload: ERROR('Bad request') });
		} catch (error) {
			yield put({ type: 'CREATE_PITCH_FAILED', payload: ERROR(error) });
		}
	});
};

// export default CREATE_CLIENT;
export default CREATE_PITCH_FORM3;
