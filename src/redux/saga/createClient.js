import { put, takeEvery } from 'redux-saga/effects';
import Request from '../multipartApiCallier';
import CONSTANT from '../../utils/constant';
import { START, DATA, ERROR } from '../handler';

const CREATE_CLIENT = function* fetchSurvey() {
	yield takeEvery('CREATE_CLIENT', function* generateAction(action) {
		yield put(START('CREATE_CLIENT_STARTED'));
		try {
			const RES = yield Request(CONSTANT.CREATE_CLIENT_URL, CONSTANT.POST, action.payload);
			yield put({
				type: 'CREATE_CLIENT_SUCCESS',
				payload: RES ? DATA(RES) : ERROR('Bad request'),
			});
		} catch (error) {
			yield put({ type: 'CREATE_CLIENT_FAILED', payload: ERROR(error) });
		}
	});
};

// export default CREATE_CLIENT;
export default CREATE_CLIENT;
