// constant variables declaration

const local = 'http://0f8a9cf7.ngrok.io';

class Constant {
	PUBLIC_PATH = process.env.PUBLIC_URL;
	URL = local;
	SIGNUP_URL = '/api/users/signup';
	LOGIN_URL = '/api/users/log-in';
	CREATE_JOURNALIST_URL = '/api/journalist/create-journalist';
	CREATE_PR_URL = '/api/pr/create-pr-profile';
	SURVEY_PR_URL = '/api/users/survey/5/';
	SURVEY_JOR_URL = '/api/users/survey/6/';
	SURVEY_SUBMISSION_URL = '/api/users/survey/answer';
  GET_JOURNALIST_INTERESTS_URL = '/auto/interest-autocomplete';
  CREATE_JOURNALIST_INTEREST_URL = '/api/users/interest/create';
 	GET = 'get';
	POST = 'post';
}

export default new Constant();
