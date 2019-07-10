export const defaultState = {
	data: {},
};

export function prPitches(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_PITCHES': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_PITCHES_STARTED': {
			return { ...state };
		}
		case 'GET_PR_PITCHES_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PR_PITCHES_FAILED': {
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
