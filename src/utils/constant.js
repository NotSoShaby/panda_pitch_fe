// constant variables declaration

const local = 'http://746884cd.ngrok.io';
class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGNUP_URL = '/api/users/signup';
	CREATE_JOURNALIST_URL = '/api/journalist/create-journalist';
	CREATE_PR_URL = '/api/pr-profile/create-pr-profile';
	GET = 'get';
	POST = 'post';
}

export default new Constant();
