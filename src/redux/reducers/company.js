export const defaultState = {
	data: {},
};

export function prCompanies(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_COMPANIES_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_COMPANIES_STARTED': {
			return { ...state };
		}
		case 'GET_PR_COMPANIES_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PR_COMPANIES_FAILED': {
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
