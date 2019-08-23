export const defaultState = {
	data: {},
};

export function prClient(state = defaultState, action) {
	switch (action.type) {
		case 'GET_PR_CLIENT': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_PR_CLIENT_STARTED': {
			return { ...state };
		}
		case 'GET_PR_CLIENT_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_PR_CLIENT_FAILED': {
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

export function client(state = defaultState, action) {
	switch (action.type) {
		case 'GET_CLIENTS': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_CLIENTS_STARTED': {
			return { ...state };
		}
		case 'GET_CLIENTS_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_CLIENT_FAILED': {
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

export function clientAutoComplete(state = defaultState, action) {
	switch (action.type) {
		case 'GET_CLIENTS_AUTOCOMPLETE': {
			return { ...state, code: 'uninitiated' };
		}
		case 'GET_CLIENTS_AUTOCOMPLETE_STARTED': {
			return { ...state };
		}
		case 'GET_CLIENTS_AUTOCOMPLETE_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'GET_CLIENTS_AUTOCOMPLETE_FAILED': {
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
