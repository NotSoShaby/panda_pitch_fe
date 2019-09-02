import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';
import HELPER from '../../utils/helper';

// request to delete a pitch
const DELETE_PITCH_BY_ID = function* deletePitchById() {
	yield takeEvery('DELETE_PITCH_BY_ID', function* getPitches({
		payload: {
			id, page, pageSize, isJournalist,
		},
	}) {
		const url = id.split('/');
		const RES = yield Request(`${CONSTANT.CREATE_PITCH_FORM1_URL}${url[5]}/`, CONSTANT.DELETE);
		if (RES.status) {
			yield put({
				type: 'GET_PR_PITCHES',
				payload: { page, pageSize, isJournalist },
			});
		} else if (RES.message === CONSTANT.AUTHENTICATION_ERROR) {
			HELPER.logout();
			yield put({ type: 'LOGOUT' });
		}
	});
};

export default DELETE_PITCH_BY_ID;
