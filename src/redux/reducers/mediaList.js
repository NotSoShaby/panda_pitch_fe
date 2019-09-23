export const defaultState = {
	data: {},
};

export function mediaList(state = defaultState, action) {
	switch (action.type) {
		case 'GET_MEDIA_LIST': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_MEDIA_LIST_STARTED': {
			return { ...state };
		}
		case 'GET_MEDIA_LIST_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_MEDIA_LIST_FAILED': {
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
