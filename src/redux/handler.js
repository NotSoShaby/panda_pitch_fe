export const DATA = (data) => {
	return {
		code: 'SUCCESS',
		isLoading: false,
		data
	};
};

export const ERROR = (error) => {
	return {
		code: 'ERROR',
		isLoading: false,
		error: error
	};
};

export const START = (type) => ({ type, payload:{isLoading: true, code: 'ongoing'} });
