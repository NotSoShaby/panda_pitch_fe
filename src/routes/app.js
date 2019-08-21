import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/app';
import Home from '../containers/home';
import Authorized from './authorized';
import JRHeader from '../components/header/jrHeader';
import PRHeader from '../components/header/prHeader';

class App extends Authorized {
	handleLogout = () => {
		const { history } = this.props;
		localStorage.clear();
		logout();
		history.push('/login');
	};

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
			</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login,
});

// connect to store
export default connect(mapStateToProps, null)(App);
