// constant variables declaration

const local = 'http://abd0c0f1.ngrok.io';

class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGNUP_URL = '/api/users/signup';
	LOGIN_URL = '/api/users/log-in';
	CREATE_JOURNALIST_URL = '/api/journalist/create-journalist';
	CREATE_PR_URL = '/api/pr/create-pr-profile';
	SURVEY31_URL = '/api/users/survey/31/';
	SURVEY_SUBMISSION_URL = '/api/users/survey/answer';
  GET_JOURNALIST_INTERESTS_URL = '/auto/interest-autocomplete';//'/api/users/interests';
 	GET = 'get';
	POST = 'post';
}

export default new Constant();
