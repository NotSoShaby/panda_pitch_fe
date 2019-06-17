import React from 'react';
import Login from './login';
import UnAuthorized from '../../routes/unAuthorized';

class Index extends UnAuthorized {
	render() {
		return <Login />;
	}
}

// default importing
export default Index;
