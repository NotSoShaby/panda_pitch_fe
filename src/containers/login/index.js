import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';
import UnAuthorized from '../../routes/unAuthorized';
import HELPER from '../../utils/helper';
import { login } from '../../redux/actions/login';

class Index extends UnAuthorized {
	constructor(props) {
		super(props);
		this.state = {};
	}

	static getDerivedStateFromProps(props) {
		const { login } = props;
		if (HELPER.isSuccessInApi(login.code)) {
			props.history.push({ pathname: '/' });
		}
		return null;
	}

	// handle input change in form
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// handle login
	handleSubmit = () => {
		const { doLogin } = this.props;
		const obj = this.state;
		const res = HELPER.loginValidation(obj);
		if (!res) {
			this.setState({ error: null });
			doLogin(this.state);
		} else this.setState({ error: res });
	};

	render() {
		return (
			<Login
				{...this.state}
				{...this.props}
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			/>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		doLogin: values => login(values),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
