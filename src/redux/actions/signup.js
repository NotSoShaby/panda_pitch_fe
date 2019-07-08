import { createSelector } from 'reselect';
import store from '../Store';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: ''
};

const getSignupState = (state = store.getState()) => {
	if (state.signup) {
		return state.signup;
	} else {
		return initialState;
	}
};

export const getUserState = createSelector(getSignupState, (n) => n.data.user_id);

export const getUserId = (state) =>{
  let user = JSON.parse(localStorage.getItem('user'));
  if(user)
    return user.user_id
}

export const getUserRole = (state) =>{
  let user = JSON.parse(localStorage.getItem('user'));
  if(user)
    return user.role
}

export const signUp = ({ email, password, fullName, role }) => ({
	type: 'SIGNUP',
	payload: {
		email,
		password,
		full_name: fullName
	},
	props: {
		role: role
	}
});

export const createPrProfile = ({ position, company, linkedIn, twitter, userId }) => {
	return {
		type: 'CREATE_PR_PROFILE',
		payload: {
			user_id: getUserId(),
			company: company,
			position: position,
			linkedin_url: linkedIn ? linkedIn : '',
			twitter_url: twitter ? twitter : ''
		}
	};
};

export const createJournalistProfile = ({ position, outlet, topics, twitter }) => {
	let topicList = '';
	topics.map((item) => {
		if (topicList === '') topicList = item;
		else topicList = topicList + ',' + item;
		return null;
	});
	return {
		type: 'CREATE_JOURNALIST_PROFILE',
		payload: {
			user_id: getUserId(),
			outlet: outlet,
			position: position,
			topics: topicList,
			twitter_url: twitter ? twitter : ''
		}
	};
};

export const getJournalistInterests = (data) => ({ type: 'GET_JOURNALIST_INTERESTS', payload:data });

export const createInterest = (data) => ({type:'CREATE_JOURNALIST_INTEREST', payload:{name:data}})