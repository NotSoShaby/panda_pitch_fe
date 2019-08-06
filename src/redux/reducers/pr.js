export const defaultState = {
	data: {},
};

export function prProfile(state = defaultState, action) {
	console.log('pr state ---------------------------', state);
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
