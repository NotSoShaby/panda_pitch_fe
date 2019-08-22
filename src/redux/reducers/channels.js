export const defaultState = {
	data: {},
};

export function channels(state = defaultState, action) {
	switch (action.type) {
		case 'GET_USER_CHANNELS_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_USER_CHANNELS_STARTED': {
			return { ...state };
		}
		case 'GET_USER_CHANNELS_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_USER_CHANNELS_FAILED': {
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

export function channel(state = defaultState, action) {
	switch (action.type) {
		case 'GET_CHANNEL_BY_ID_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_CHANNEL_BY_ID_STARTED': {
			return { ...state };
		}
		case 'GET_CHANNEL_BY_ID_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_CHANNEL_BY_ID_FAILED': {
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
