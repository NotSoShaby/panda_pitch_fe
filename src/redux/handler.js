export const DATA = data => ({
	code: 'SUCCESS',
	isLoading: false,
	data,
	error: '',
});

export const ERROR = error => ({
	code: 'ERROR',
	isLoading: false,
	error,
	data: {},
});

export const START = type => ({ type, payload: { isLoading: true, code: 'ongoing' } });
