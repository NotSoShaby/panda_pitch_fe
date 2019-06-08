export const signUp = (values) => ({
	type: 'SIGNUP',
	payload: {
		email: values.email,
		password: values.password,
		full_name: values.fullName
	}
});
