export const defaultState = {
	data: {},
};

export function journalistProfile(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_JOURNALIST_PROFILE_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'CREATE_JOURNALIST_PROFILE_STARTED': {
			return { ...state };
		}
		case 'CREATE_JOURNALIST_PROFILE_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'CREATE_JOURNALIST_PROFILE_FAILED': {
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
