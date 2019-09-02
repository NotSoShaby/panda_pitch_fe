export const defaultState = {
	data: {},
	isLoading: true,
};

export function getUserById(state = defaultState, action) {
	switch (action.type) {
		case 'GET_USER_BY_ID_INITIATED': {
			return { ...state, code: 'uninitiated', isLoading: true };
		}
		case 'GET_USER_BY_ID_STARTED': {
			return { ...state, code: 'initiated', isLoading: true };
		}
		case 'GET_USER_BY_ID_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_USER_BY_ID_FAILED': {
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
