import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/App';
import SignUp from '../containers/signup';
import Login from '../containers/login';
import Survey from '../containers/survey';

// Switch between one screen to another screen
const ProjectRoutes = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={(props) => <App {...props} />} />
				<Route exact path="/signup" component={(props) => <SignUp {...props} />} />
				<Route exact path="/login" component={(props) => <Login {...props} />} />
				<Route exact path="/survey" component={(props) => <Survey {...props} />} />
			</Switch>
		</Router>
	);
};

// default importing
export default ProjectRoutes;
