export const defaultState = {
	data: {},
};

export function prClientsAuto(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_CLIENTS_AUTO': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_CLIENTS_AUTO_STARTED': {
			return { ...state };
		}
		case 'GET_PR_CLIENTS_AUTO_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PR_CLIENTS_AUTO_FAILED': {
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
