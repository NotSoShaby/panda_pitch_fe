export const DATA = data => ({
	code: 'SUCCESS',
	isLoading: false,
	data,
});

export const ERROR = error => ({
	code: 'ERROR',
	isLoading: false,
	error,
});

export const START = type => ({ type, payload: { isLoading: true, code: 'ongoing' } });
