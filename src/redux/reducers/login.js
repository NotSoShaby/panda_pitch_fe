import HELPER from '../../utils/helper';

export const defaultState = {
	data: HELPER.getItemFromSession('user') || {},
};

export function login(state = defaultState, action) {
	switch (action.type) {
		case 'LOGIN_INITIATED': {
			return { ...state, code: 'uninitiated' };
		}
		case 'LOGIN_STARTED': {
			return { ...state };
		}
		case 'LOGIN_SUCCESS': {
			return { ...state, ...action.payload };
		}
		case 'LOGIN_FAILED': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'SIGNUP_STARTED': {
			return { ...state, code: 'ongoing', isLoading: true };
		}
		case 'SIGNUP_SUCCESS': {
			return { ...state, ...action.payload };
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
