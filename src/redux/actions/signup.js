import HELPER from '../../utils/helper';
import store from '../Store';

const state = store.getState();
const { signup } = state;
const user = signup.data;

export const signUp = ({ email, password, fullName, role }) => ({
	type: 'SIGNUP',
	payload: {
		email: email,
		password: password,
		full_name: fullName
	},
	props: {
		role: role
	}
});

export const createPrProfile = ({ position, company, linkedIn, twitter, userId }) => ({
	type: 'CREATE_PR_PROFILE',
	payload: {
		user_id: user.user_id,
		company: company,
		position: position,
		linkedin_url: linkedIn,
		twitter_url: twitter
	}
});

export const createJournalistProfile = ({ position, outlet, topics, twitter }) => ({
	type: 'CREATE_JOURNALIST_PROFILE',
	payload: {
		user_id: user.user_id,
		outlet: outlet,
		position: position,
		topics: topics,
		twitter_url: twitter
	}
});
