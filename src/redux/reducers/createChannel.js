export const defaultState = {
	data: {},
};

export function createChannel(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_CHANNEL_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'CREATE_CHANNEL_STARTED': {
			return { ...state };
		}
		case 'CREATE_CHANNEL_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'CREATE_CHANNEL_FAILED': {
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
