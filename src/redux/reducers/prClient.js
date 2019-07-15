export const defaultState = {
	data: {},
};

export function prClient(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_CLIENT': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_CLIENT_STARTED': {
			return { ...state };
		}
		case 'GET_PR_CLIENT_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PR_CLIENT_FAILED': {
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
