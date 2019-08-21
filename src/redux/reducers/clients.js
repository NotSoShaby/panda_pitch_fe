export const defaultState = {
	data: {},
};

export function createClient(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_CLIENT_INITIATED': {
			return { ...state, code: 'uninitiated', isLoading: true };
		}
		case 'CREATE_CLIENT_STARTED': {
			return { ...state, code: 'initiated', isLoading: true };
		}
		case 'CREATE_CLIENT_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'CREATE_CLIENT_FAILED': {
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
