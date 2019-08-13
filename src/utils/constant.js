// constant variables declaration

// const local = 'http://localhost:8000';
// const server = 'http://18.224.60.229:2312';
// const server = 'http://18.191.42.149:8000';
const server = 'http://192.168.2.84:8000';

class Constant {
  PUBLIC_PATH = process.env.PUBLIC_URL;

  URL = server;

  SIGNUP_URL = '/api/user/';

  LOGIN_URL = '/api/log-in/';
  // SIGNUP_URL = '/api/users/signup';

  // LOGIN_URL = '/api/users/log-in';

  CREATE_PITCH_URL = '/api/pitch/';

  GET_CLIENTS_URL = '/api/client/';

  CREATE_CLIENT_URL = '/api/client/';

  GET_CLIENTS_AUTOCOMPLETE_URL = '/api/client/autocomplete/';

  CREATE_JOURNALIST_URL = '/api/profile/';

  CREATE_PR_URL = '/api/profile/';

  GET_PR_URL = '/api/profile/pr/';

  SURVEY_URL = '/survey/';

  // SURVEY_JOR_URL = '/api/users/survey/2';

  SURVEY_SUBMISSION_URL = '/survey/answer/';

  GET_INTERESTS_URL = '/api/interest/';

  GET_JOURNALIST_INTERESTS_URL = '/api/interest/autocomplete/';

  CREATE_JOURNALIST_INTEREST_URL = '/api/interest/';

  GET_COMPAINES_URL = '/api/company/autocomplete/';

  CREATE_COMPANIES_URL = '/api/company/';

  GET_POSITIONS_URL = '/api/position/autocomplete/';

  CREATE_POSITION_URL = '/api/position/';

  GET_PR_PITCHES_URL = '/api/pr/mypitch?pr_id=1';

  GET_PR_CLIENTS_AUTO = '/api/pr/clients-auto?q=C';

  GET_PR_CLIENTS = '/api/pr/clients?pr_id=1';

  CREATE_PR_CLIENT = '/api/pr/client/create';

  GET_PR_MEDIALISTS = '/api/pr/medialists?pr_id=1';

  GET_MEDIALISTS = '/api/media-list';

  CREATE_PR_MEDIALISTS = '/api/pr/medialists/create';

  GET = 'get';

  POST = 'post';
}

export default new Constant();
