import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/app';
import Header from '../components/header';
import Home from '../containers/home';
import Authorized from './authorized';

class App extends Authorized {
	handleLogout = () => {
		const { history } = this.props;
		localStorage.clear();
		logout();
		history.push('/login');
	};

	render() {
		return (
			<div className="wrapper">
				<Header onLogout={this.handleLogout} />
				{/* <button onClick={this.handleLogout}>logout</button> */}
				<Route exact path="/" component={props => <Home {...props} />} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login,
	signup: state.signup,
});


// connect to store
export default connect(mapStateToProps, null)(App);
// export default App;
