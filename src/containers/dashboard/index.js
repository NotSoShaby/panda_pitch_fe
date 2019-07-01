import React from 'react';
import Dashboard from './dashboard';
import Authorized from '../../routes/authorized';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/actions/dashboard';

class Index extends Authorized {
	

  // logout - ( empty store )
  handleLogout = () => {
    let { doLogout, history } = this.props;
    localStorage.clear();
    doLogout()
		history.push('/login');
  };
  
	render() {
		return <Dashboard onLogout={this.handleLogout}/>;
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
			doLogout: () => logout(),
		},
		dispatch
	);

// connect to store
export default connect(null, mapDispatchToProps)(Index);
