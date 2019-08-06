export const defaultState = {
	data: {},
};

export function journalistInterests(state = defaultState, action) {
	switch (action.type) {
		case 'GET_JOURNALIST_INTEREST_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_JOURNALIST_INTEREST_STARTED': {
			return { ...state };
		}
		case 'GET_JOURNALIST_INTEREST_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_JOURNALIST_INTEREST_FAILED': {
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
