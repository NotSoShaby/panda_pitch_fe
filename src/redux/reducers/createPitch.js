export const defaultState = {
	data: {},
};

export function createPitch(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_PITCH_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'CREATE_PITCH_STARTED': {
			return { ...state };
		}
		case 'CREATE_PITCH_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'CREATE_PITCH_FAILED': {
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
