export const login = ({ email, password }) => ({
	type: 'LOGIN',
	payload: {
		email,
		password,
	},
});

export const getLoggedInUserProfile = data => ({ type: 'GET_LOGGED_IN_USER_PROFILE', payload: data });

export const logout = () => ({ type: 'LOGOUT' });
