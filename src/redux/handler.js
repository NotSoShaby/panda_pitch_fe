import CONSTANT from '../utils/constant';

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

export const checkStatus = (response) => {
	console.log('res=========pppppp==>', response);
	if (response.status >= 200 && response.status < 300) {
		return {
			status: true,
			data: response.data,
			message: response.statusText,
		};
	}
	if (response.status === 500) {
		return response.json().then((errorData) => {
			const message = (errorData || {}).error;
			const error = {
				status: false,
				message: new TypeError(message || 'Server error'),
			};
			return error;
		});
	}
	if (response.status === 401) {
		const error = {
			status: false,
			message: 'Unathorized',
		};
		return error;
	}
	return response.json().then((errorData) => {
		const error = {
			status: false,
			message: errorData,
		};
		return error;
	});
};

// export const parseJSON = (response) => {
// 	console.log('res========pp===>', response);
// 	if (response.status === 204 || response.status === 205) {
// 		return {};
// 	}
// 	if (response.status === 401 || response.status === 500) {
// 		return response;
// 	}
// 	if (response.headers) {
// 		const contentType = response.headers.get('content-type');
// 		if (contentType && contentType.indexOf('application/json') !== -1) {
// 			return response.json();
// 		}
// 	}
// 	return {};
// };

export const handleError = ({ response }) => {
	if (response.status === 400) {
		const error = {
			status: false,
			data: response.data,
			message: response.statusText,
		};
		return error;
	}
	if (response.status === 500) {
		return response.json().then((errorData) => {
			const message = (errorData || {}).error;
			const error = {
				status: false,
				message: new TypeError(message || 'Server error'),
			};
			return error;
		});
	}
	if (response.status === 401 || response.status === 403) {
		const error = {
			status: false,
			message: CONSTANT.AUTHENTICATION_ERROR,
		};
		return error;
	}
	return response.json().then((errorData) => {
		const error = {
			status: false,
			message: errorData,
		};
		return error;
	});
};
