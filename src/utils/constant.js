// constant variables declaration

// const local = 'http://127.0.0.1:8000';
const server = 'http://18.191.42.149:8000';

class Constant {
  PUBLIC_PATH = process.env.PUBLIC_URL;

  URL = server;

	SIGNUP_URL = '/api/users/signup';

	LOGIN_URL = '/api/log-in/';

	CREATE_JOURNALIST_URL = '/api/journalist/create-journalist';

  CREATE_PR_URL = '/api/pr/create-pr-profile';

  SURVEY_PR_URL = '/api/users/survey/1';

  SURVEY_JOR_URL = '/api/users/survey/2';

  SURVEY_SUBMISSION_URL = '/api/users/survey/answer';

  GET_JOURNALIST_INTERESTS_URL = '/auto/interest-autocomplete';

  CREATE_JOURNALIST_INTEREST_URL = '/api/users/interest/create';

  GET_PR_PITCHES_URL = '/api/pr/mypitch?pr_id=1'

  CREATE_CHANNEL = '/api/chat/'

  GET_USER_CHANNELS = '/api/chat/by_user/'

  GET = 'get';

	POST = 'post';
}

export default new Constant();
