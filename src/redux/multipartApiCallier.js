import axios from 'axios';
import CONSTANT from '../utils/constant';

// Make an api call

// const token = localStorage.getItem('token') || '';
export default async (url, method = 'get', body, isAuthenticationRequired = true) => axios({
	method,
	data: body,
	url: `${CONSTANT.URL}${url}`,
	headers: {
		// Authorization: isAuthenticationRequired && `Token ${localStorage.getItem('token')}`,
		Authorization: isAuthenticationRequired && `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'multipart/form-data',
	},
})
	.then(res => res.data)
	.catch(err => console.log(err));
