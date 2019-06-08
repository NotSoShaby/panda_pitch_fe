// constant variables declaration

const local = 'http://48d0e428.ngrok.io';
class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGN_URL = '/api/users/signup/';
	GET = 'get';
	POST = 'post';
}

export default new Constant();
