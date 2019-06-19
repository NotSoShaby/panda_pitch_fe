import { Component } from 'react';

export class Authorized extends Component {
	// redirect unauthorized user to login screen
	static validateAuthorization(props) {
		const isAuthorized = props.location.state && props.location.state.isAuthorized;
		if (!localStorage.getItem('user') && !isAuthorized) props.history.push('/login');
	}

	constructor(props) {
		super(props);
		Authorized.validateAuthorization(props);
	}
}

export default Authorized;
