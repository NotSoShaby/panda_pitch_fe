export const defaultState = {
	data: {},
};

export function medialists(state = defaultState, action) {
	switch (action.type) {
		case 'GET_MEDIALISTS': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_MEDIALISTS_STARTED': {
			return { ...state };
		}
		case 'GET_MEDIALISTS_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_MEDIALISTS_FAILED': {
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
