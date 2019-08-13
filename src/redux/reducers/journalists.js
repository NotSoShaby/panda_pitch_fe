export const defaultState = {
	data: {},
};

export function journalists(state = defaultState, action) {
	switch (action.type) {
		case 'FIND_JOURNALIST_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'FIND_JOURNALIST_STARTED': {
			return { ...state };
		}
		case 'FIND_JOURNALIST_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'FIND_JOURNALIST_FAILED': {
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
