import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './app';
import SignUp from '../containers/signup';
import Login from '../containers/login';
import Survey from '../containers/survey';

import history from './history';

// Switch between one screen to another screen
const ProjectRoutes = () => (
	<Router
		history={
			history
		}
	>
		<Switch>
			<Route exact path="/signup" component={props => <SignUp {...props} />} />
			<Route exact path="/login" component={props => <Login {...props} />} />
			<Route exact path="/survey" component={props => <Survey {...props} />} />
			<Route path="/" component={props => <App {...props} />} />
		</Switch>
	</Router>
);
// default importing
export default ProjectRoutes;
