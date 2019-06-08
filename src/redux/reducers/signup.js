const setUserToken = () => {
	if (localStorage.getItem('role') === 'user') return localStorage.getItem('token');
	else return null;
};

export const defaultState = {
	data: { register: { token: setUserToken() } }
};

export function signup(state = defaultState, action) {
	switch (action.type) {
		case 'SIGNUP_INITATED': {
			return { ...state, status: 'uninitiated' };
		}
		case 'SIGNUP_STARTED': {
			return { ...state, status: 'ongoing' };
		}
		case 'SIGNUP_SUCCESS': {
			return { ...state, ...action.payload, error: '', status: 'success' };
		}
		case 'SIGNUP_FAILED': {
			return {
				...state,
				...defaultState,
				error: action.payload,
				status: 'failed'
			};
		}
		default: {
			return state;
		}
	}
}
