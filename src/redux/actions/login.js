export const login = ({ username, password }) => ({
	type: 'LOGIN',
	payload: {
		email: username,
		password,
	},
});


export const Hello = 'kkk';
