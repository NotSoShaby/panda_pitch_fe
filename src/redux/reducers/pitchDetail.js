export const defaultState = {
	data: {},
};

export function pitchDetail(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PITCH_BY_ID_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PITCH_BY_ID_STARTED': {
			return { ...state };
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
		default: {
			return state;
		}
	}
}
