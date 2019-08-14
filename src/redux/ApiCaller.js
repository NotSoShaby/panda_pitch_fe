import fetch from 'cross-fetch';
import CONSTANT from '../utils/constant';

// Make an api call

// const token = localStorage.getItem('token') || '';
export default async (url, method = 'get', body, isAuthenticationRequired = true) => fetch(`${CONSTANT.URL}${url}`, {
	method,
	body: JSON.stringify(body),
	headers: {
		// Authorization: isAuthenticationRequired && `Token ${localStorage.getItem('token')}`,
		Authorization: isAuthenticationRequired && `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	},
})
	.then(response => response.json().then(json => ({ json, response })))
	.then(({ json, response }) => {
		if (!response.ok) {
			return Promise.reject(json);
		}
		return json;
	})
	.then(response => response, error => error)
	.catch(err => err);
