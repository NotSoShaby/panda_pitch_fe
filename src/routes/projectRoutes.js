import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './app';
import SignUp from '../containers/signup';
import Login from '../containers/login';
import Survey from '../containers/survey';
import CreatePitch from '../containers/createPitch';
import history from './history';
// import Personalization from '../containers/personalization';

// Switch between one screen to another screen
const ProjectRoutes = () => (
	<Router
		history={
			history
		}
	>
		<Switch>
			<Route exact path="/" component={props => <App {...props} />} />
			<Route exact path="/signup" component={props => <SignUp {...props} />} />
			<Route exact path="/login" component={props => <Login {...props} />} />
			<Route exact path="/survey" component={props => <Survey {...props} />} />
			{/* <Route exact path="/personalization" component={props => <Personalization
			{...props} />} /> */}
			<Route exact path="/create_pitch" component={props => <CreatePitch {...props} />} />
		</Switch>
	</Router>
);
// default importing
export default ProjectRoutes;
