export const defaultState = {
	data: {},
};

export function positions(state = defaultState, action) {
	switch (action.type) {
		case 'GET_POSITIONS_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_POSITIONS_STARTED': {
			return { ...state };
		}
		case 'GET_POSITIONS_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_POSITIONS_FAILED': {
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
