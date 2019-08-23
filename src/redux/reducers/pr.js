export const defaultState = {
	data: {},
};

export function prProfile(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_PR_PROFILE_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'CREATE_PR_PROFILE_STARTED': {
			return { ...state };
		}
		case 'CREATE_PR_PROFILE_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'CREATE_PR_PROFILE_FAILED': {
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

export function pr(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_STARTED': {
			return { ...state };
		}
		case 'GET_PR_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PRI_FAILED': {
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
