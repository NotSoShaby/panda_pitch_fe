export const defaultState = {
	data: {},
};

export function survey(state = defaultState, action) {
	switch (action.type) {
		case 'GET_SURVEY_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_SURVEY_STARTED': {
			return { ...state, ...action.payload };
		}
		case 'GET_SURVEY_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_SURVEY_FAILED': {
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
