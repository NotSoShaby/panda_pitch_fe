import HELPER from '../../utils/helper';

export const defaultState = {
	data: { token: localStorage.getItem('token'), user: { ...HELPER.getItemFromSession('user') } },
};

export function signup(state = defaultState, action) {
	switch (action.type) {
		case 'SIGNUP_INITATED': {
			return { ...state, code: 'uninitiated', isLoading: false };
		}
		case 'SIGNUP_STARTED': {
			return { ...state, code: 'ongoing', isLoading: true };
		}
		case 'SIGNUP_SUCCESS': {
			return { ...state, ...action.payload, error: {} };
		}
		case 'SIGNUP_FAILED': {
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
