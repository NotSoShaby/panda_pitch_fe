import { put, takeEvery } from 'redux-saga/effects';
import Request from '../multipartApiCallier';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

const CREATE_PITCH = function* fetchSurvey() {
	yield takeEvery('CREATE_PITCH', function* generateAction(action) {
		yield put(START('CREATE_PITCH_STARTED'));
		try {
			const RES = yield Request(CONSTANT.CREATE_PITCH_URL, CONSTANT.POST, action.payload);
			yield put({
				type: 'CREATE_PITCH_SUCCESS',
				payload: RES ? DATA(RES) : ERROR('Bad request'),
			});
		} catch (error) {
			yield put({ type: 'CREATE_PITCH_FAILED', payload: ERROR(error) });
		}
	});
};

// export default CREATE_CLIENT;
export default CREATE_PITCH;
