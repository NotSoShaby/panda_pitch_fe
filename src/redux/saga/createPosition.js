import { put, takeEvery } from 'redux-saga/effects';
import Request from '../ApiCaller';
import CONSTANT from '../../utils/constant';

// create user signup request
const CREATE_POSITION = function* createPosition() {
	yield takeEvery('CREATE_POSITION', function* generateAction(action) {
		try {
			const DATA = yield Request(
				CONSTANT.CREATE_POSITION_URL,
				CONSTANT.POST, action.payload,
			);
			if (DATA) {
				const position = { data: [{ ...DATA }] };
				yield put({
					type: 'GET_POSITIONS_SUCCESS',
					payload: position,
				});
			}
		} catch (error) {
			yield put({ type: 'GET_POSITIONS_FAILED', payload: error });
		}
	});
};

export default CREATE_POSITION;
