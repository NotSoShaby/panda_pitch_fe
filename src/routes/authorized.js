import { Component } from 'react';
import HELPER from '../utils/helper';

export class Authorized extends Component {
	// redirect unauthorized user to login screen
	static validateAuthorization(props) {
		if (
			!localStorage.getItem('user')
      && !(props.login && HELPER.isSuccessInApi(props.login.code))
		) { props.history.push('/login'); }
	}

	constructor(props) {
		super(props);
		Authorized.validateAuthorization(props);
	}
}

export default Authorized;
