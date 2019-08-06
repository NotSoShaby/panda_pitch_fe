// import { Component } from 'react';
import { createSelector } from 'reselect';
import store from '../Store';
import HELPER from '../../utils/helper';

const initialState = {
	message: {},
	// isLoading: false,
	data: {},
	code: '',
};

const getSignupState = (state = store.getState()) => {
	if (state.login) {
		return state.login;
	}
	return initialState;
};

export const getUserState = createSelector(getSignupState, n => n.data.user_id);

export const getUserId = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) return user.id;
	return null;
};

export const getUserRole = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) return user.role;
	return null;
};

export const signUp = ({
	email, password, fullName, role,
}) => ({
	type: 'SIGNUP',
	payload: {
		email,
		password,
		full_name: fullName,
		is_pr: HELPER.isPr(role),
		is_journalist: HELPER.isJournalist(role),
	},
});

export const createPrProfile = ({
	positionList, companiesList, linkedIn, twitter, url, fullName = null,
}) => {
	let company = companiesList.filter(company => company.isActive && company.value);
	company = company.map(({ url }) => url);
	let position = positionList.filter(position => position.isActive && position.value);
	position = position.map(({ url }) => url);
	return ({
		type: 'CREATE_PR_PROFILE',
		payload: {
			user: url,
			full_name: fullName,
			company,
			position,
			linkedin_url: linkedIn || '',
			twitter_url: twitter || '',
		},
	});
};

export const createJournalistProfile = ({
	positionList, outlet, twitter, interests, fullName = null,
}) => {
	let position = positionList.filter(position => position.isActive && position.value);
	position = position.map(({ url }) => url);
	let interestsList = interests.filter(interestsList => interestsList.isActive
    && interestsList.value);
	interestsList = interestsList.map(({ url }) => url);
	return {
		type: 'CREATE_JOURNALIST_PROFILE',
		payload: {
			full_name: fullName,
			user_id: getUserId(),
			outlet: outlet[0].url,
			position,
			interests: interestsList,
			twitter_url: twitter || '',
		},
	};
};

export const getJournalistInterests = data => ({ type: 'GET_JOURNALIST_INTERESTS', payload: data });

export const createInterest = data => ({ type: 'CREATE_JOURNALIST_INTEREST', payload: { name: data } });

export const createPrCompany = data => ({ type: 'CREATE_PR_COMPANY', payload: { name: data } });

export const getPrCompanies = data => ({ type: 'GET_PR_COMPANIES', payload: data });

export const createPosition = data => ({ type: 'CREATE_POSITION', payload: { name: data } });

export const getPositions = data => ({ type: 'GET_POSITIONS', payload: data });
