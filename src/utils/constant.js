// constant variables declaration

const local = 'http://4d9203be.ngrok.io';
class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGN_URL = '/api/users/signup';
	GET = 'get';
	POST = 'post';
}

export default new Constant();
