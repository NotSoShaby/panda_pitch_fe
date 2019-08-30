// constant variables declaration

// const server = 'http://18.191.42.149:8000'; // server
// const server = 'http://192.168.2.88:8000'; // local
const server = 'http://18.191.202.211:8000'; // socket

class Constant {
  PUBLIC_PATH = process.env.PUBLIC_URL;

  URL = server;

  AUTHENTICATION_ERROR = 'Authentication error'

  GET = 'get';

  POST = 'post';

  PATCH = 'patch';

  DELETE = 'delete';

  SIGNUP_URL = '/api/user/';

  LOGIN_URL = '/api/log-in/';

  CREATE_PITCH_FORM1_URL = '/api/pitch/';

  CREATE_PITCH_FORM2_URL = '/api/personalization/';

  GET_CLIENTS_URL = '/api/client/';

  CREATE_CLIENT_URL = '/api/client/';

  GET_CLIENTS_AUTOCOMPLETE_URL = '/api/client/autocomplete/';

  CREATE_JOURNALIST_URL = '/api/profile/';

  CREATE_PR_URL = '/api/profile/';

  GET_PR_URL = '/api/profile/pr/';

  SURVEY_URL = '/survey/';

  SURVEY_SUBMISSION_URL = '/survey/answer/';

  GET_INTERESTS_URL = '/api/interest/';

  GET_JOURNALIST_INTERESTS_URL = '/api/interest/autocomplete/';

  CREATE_JOURNALIST_INTEREST_URL = '/api/interest/';

  GET_COMPAINES_URL = '/api/company/autocomplete/';

  CREATE_COMPANIES_URL = '/api/company/';

  GET_POSITIONS_URL = '/api/position/autocomplete/';

  CREATE_POSITION_URL = '/api/position/';

  GET_PR_PITCHES_URL = '/api/pitch/pr/';

  GET_JR_PITCHES_URL = '/api/pitch/journalist/';

  GET_PR_CLIENTS_AUTO = '/api/pr/clients-auto?q=C';

  GET_PR_CLIENTS = '/api/pr/clients?pr_id=1';

  CREATE_PR_CLIENT = '/api/pr/client/create';

  // GET_PR_MEDIALISTS = '/api/pr/medialists?pr_id=1';

  GET_MEDIA_LIST_AUTOCOMPLETE = '/api/media-list/autocomplete/';

  GET_MEDIA_LIST = '/api/media-list/';

  CREATE_PR_MEDIALISTS = '/api/pr/medialists/create';

  FIND_JOURNALIST_URL = '/api/profile/autocomplete/journalist/'

  CREATE_CHANNEL = '/api/chat/'

  GET_USER_CHANNELS = '/api/chat/by_user/'
}

export default new Constant();
