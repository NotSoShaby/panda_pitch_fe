import fetch from 'cross-fetch';
import CONSTANT from '../utils/constant';

// Make an api call
export default async (url, method = 'get', body) => {
	return fetch(`${CONSTANT.URL}${url}`, {
		method,
		body: JSON.stringify(body),
		headers: {
			// Authorization: `Bearer ${localStorage.getItem('authentication_token')}`,
			'Content-Type': 'application/json'
		}
	})
		.then((response) =>
			response.json().then((json) => {
				return { json, response };
			})
		)
		.then(({ json, response }) => {
			if (!response.ok) {
				return Promise.reject(json);
			}
			return json;
		})
		.then((response) => response, (error) => error);
};
