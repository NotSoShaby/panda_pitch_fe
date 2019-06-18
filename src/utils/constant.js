// constant variables declaration

const local = 'http://3b95dd6d.ngrok.io';

class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGNUP_URL = '/api/users/signup';
	CREATE_JOURNALIST_URL = '/api/journalist/create-journalist';
	CREATE_PR_URL = '/api/pr/create-pr-profile';
	SURVEY31_URL = '/api/users/survey/31/';
	SURVEY_SUBMISSION_URL = '/api/users/survey/answer';
	GET = 'get';
	POST = 'post';
}

export default new Constant();
