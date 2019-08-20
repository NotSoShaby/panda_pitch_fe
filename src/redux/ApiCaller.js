import axios from 'axios';
import CONSTANT from '../utils/constant';
import { checkStatus, handleError } from './handler';

// Make an api call

// const token = localStorage.getItem('token') || '';
// export default async (url, method = 'get', body,
// isAuthenticationRequired = true) => fetch(`${CONSTANT.URL}${url}`, {
// 	method,
// 	body: JSON.stringify(body),
// 	headers: {
// 		// Authorization: isAuthenticationRequired && `Token ${localStorage.getItem('token')}`,
// 		Authorization: isAuthenticationRequired && `JWT ${localStorage.getItem('token')}`,
// 		'Content-Type': 'application/json',
// 	},
// })
// 	.then(response => response.json().then(json => ({ json, response })))
// 	.then(({ json, response }) => {
// 		if (!response.ok) {
// 			return Promise.reject(json);
// 		}
// 		return json;
// 	})
// 	.then(response => response, error => error)
//   .catch(err => err);

// const queryString = require('query-string');

const headerData = isAuthenticationRequired => ({
	Authorization: isAuthenticationRequired && `JWT ${localStorage.getItem('token')}`,
	'content-type': 'application/json',
});

// const BodyConversion = (body, header) => {
// 	// if (header['content-type'] === 'application/x-www-form-urlencoded') {
// 	// 	return queryString.stringify(body);
// 	// }
// 	if (header['content-type'] === 'application/json') {
// 		return JSON.stringify(body);
// 	}
// 	return body;
// };

export default (
	endpoint,
	method = CONSTANT.GET,
	body,
	isAuthenticationRequired = true,
	// header,
	hostName = CONSTANT.URL,
) => axios(`${hostName}${endpoint}`, {
	headers: headerData(isAuthenticationRequired),
	method,
	data: JSON.stringify(body),
})
	.then(checkStatus)
	// .then(parseJSON)
	.catch(handleError);
