import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './dashboard';
import Authorized from '../../routes/authorized';
import { logout } from '../../redux/actions/dashboard';

class Index extends Authorized {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// logout - ( empty store )
	handleLogout = () => {
		const { doLogout, history } = this.props;
		localStorage.clear();
		doLogout();
		history.push('/login');
	};

	render() {
		return <Dashboard {...this.state} {...this.props} onLogout={this.handleLogout} />;
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		doLogout: () => logout(),
	},
	dispatch,
);

// connect to store
export default connect(mapStateToProps, mapDispatchToProps)(Index);
