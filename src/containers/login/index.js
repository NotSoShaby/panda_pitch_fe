import React from 'react';
import Login from './login';
import UnAuthorized from '../../routes/unAuthorized';
import HELPER from '../../utils/helper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/login';

class Index extends UnAuthorized {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static getDerivedStateFromProps(props, state) {
		let { login } = props;
		if (HELPER.isSuccessInApi(login.code)) {
			props.history.push({ pathname: '/survey', state: { isAuthorized: true } });
		}
		return null;
	}

	// handle input change in form
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// handle login
	handleSubmit = () => {
		let { doLogin } = this.props;
		let res = HELPER.loginValidation(this.state);
		if (!res) {
			this.setState({ error: null });
			doLogin(this.state);
		} else this.setState({ error: res });
	};

	render() {
		return <Login {...this.state} {...this.props} onChange={this.handleChange} onSubmit={this.handleSubmit} />;
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			doLogin: (values) => login(values)
		},
		dispatch
	);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
