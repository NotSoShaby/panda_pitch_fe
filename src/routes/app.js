import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/app';
import Home from '../containers/home';
import Authorized from './authorized';
import JRHeader from '../components/header/jrHeader';
import PRHeader from '../components/header/prHeader';
import Chat from '../containers/chat';
import Profile from '../containers/profile';
import CreatePitch from '../containers/createPitch';

class App extends Authorized {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleLogout = () => {
		const { logout } = this.props;
		logout();
	};

	static getDerivedStateFromProps(props) {
		const { login: { data }, logout } = props;
		if (!data || (data && Object.keys(data).length === 0 && data.constructor === Object)) {
			logout();
		}
		return null;
	}

	renderHeader = () => {
		const { login: { data } } = this.props;
		if (data && !data.isJournalist) {
			return <PRHeader onLogout={this.handleLogout} />;
		}
		return <JRHeader onLogout={this.handleLogout} />;
	};

	render() {
		return (
			<div className="wrapper">
				{this.renderHeader()}
				<Route exact path="/" component={props => <Home {...props} />} />
				<Route exact path="/chat" component={props => <Chat {...props} />} />
				<Route exact path="/profile" component={props => <Profile {...props} />} />
				<Route exact path="/create_pitch" component={props => <CreatePitch {...props} />} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		logout: values => logout(values),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(App);
