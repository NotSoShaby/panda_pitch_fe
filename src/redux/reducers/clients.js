export const defaultState = {
	data: {},
};

export function createClient(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_CLIENT_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'CREATE_CLIENT_STARTED': {
			return { ...state };
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
