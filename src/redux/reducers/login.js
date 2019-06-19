const setUserToken = () => {
	if (localStorage.getItem('role') === 'user') return localStorage.getItem('token');
	return null;
};

const setUserProfile = () => {
	const user = localStorage.getItem('user');
	if (localStorage.getItem('role') === 'admin' && user) return { ...JSON.parse(user), token: null };
	return { token: setUserToken() };
};

export const defaultState = {
	data: { login: setUserProfile() },
};

export function login(state = defaultState, action) {
	switch (action.type) {
		case 'LOGIN_INITIATED': {
			return { ...state, status: 'uninitiated' };
		}
		case 'LOGIN_STARTED': {
			return { ...state, status: 'ongoing' };
		}
		case 'LOGIN_SUCCESS': {
			return {
				...state, ...action.payload, error: '', status: 'success',
			};
		}
		case 'SET_USER': {
			return {
				...state, ...action.payload, error: '', status: 'success',
			};
		}
		case 'LOGIN_FAILED': {
			return {
				...state,
				...defaultState,
				error: action.payload,
				status: 'failed',
			};
		}
		default: {
			return state;
		}
	}
}
