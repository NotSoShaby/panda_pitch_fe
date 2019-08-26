export const defaultState = {
	data: {},
	isLoading: true,
};

export function pitchDetail(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PITCH_BY_ID_INITIATED': {
			return { ...state, code: 'uninitiated', isLoading: true };
		}
		case 'GET_PITCH_BY_ID_STARTED': {
			return { ...state, isLoading: true };
		}
		case 'GET_PITCH_BY_ID_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PITCH_BY_ID_FAILED': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'CLEAR_GET_PITCH_BY_ID': {
			return {
				isLoading: true,
				data: {},
			};
		}
		default: {
			return state;
		}
	}
}
