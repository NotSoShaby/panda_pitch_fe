import axios from 'axios';
import CONSTANT from '../utils/constant';
import { checkStatus, handleError } from './handler';


const headerData = (isAuthenticationRequired, multipart) => ({
	Authorization: isAuthenticationRequired && `JWT ${localStorage.getItem('token')}`,
	'content-type': multipart ? 'multipart/form-data' : 'application/json',
});

// Make an api call
export default (
	endpoint,
	method = CONSTANT.GET,
	body,
	isAuthenticationRequired = true,
	hostName = CONSTANT.URL,
	multipart = false,
) => axios(`${hostName}${endpoint}`, {
	headers: headerData(isAuthenticationRequired, multipart),
	method,
	data: multipart ? body : JSON.stringify(body),
})
	.then(checkStatus)
	.catch(handleError);
