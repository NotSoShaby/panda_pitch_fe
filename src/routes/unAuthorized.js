import React, { Component } from 'react';

export class UnAuthorized extends Component {
	// redirect authorized user to dashboard
	static validateAuthorization(props) {
		if (localStorage.getItem('user')) props.history.push('/');
	}

	constructor(props) {
		super(props);
		UnAuthorized.validateAuthorization(props);
	}
}

export default UnAuthorized;
