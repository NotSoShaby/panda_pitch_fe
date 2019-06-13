const setUserToken = () => {
	if (localStorage.getItem('role') === 'user') return localStorage.getItem('token');
	else return null;
};

const setUserProfile = () => {
	let user = localStorage.getItem('user');
	if (localStorage.getItem('role') === 'admin' && user) return { ...JSON.parse(user), token: null };
	else return { token: setUserToken() };
};

export const defaultState = {
	data: {}
};

export function createJournalistProfile(state = defaultState, action) {
	switch (action.type) {
		case 'CREATE_JOURNALIST_PROFILE_INITIATED': {
			return { ...state, status: 'uninitiated' };
		}
		case 'CREATE_JOURNALIST_PROFILE_STARTED': {
			return { ...state, status: 'ongoing' };
		}
		case 'CREATE_JOURNALIST_PROFILE_SUCCESS': {
			return { ...state, ...action.payload, error: '', status: 'success' };
		}
		case 'CREATE_JOURNALIST_PROFILE_FAILED': {
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
