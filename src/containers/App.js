import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorized from '../routes/authorized';
import Store from '../redux/Store';

class App extends Authorized {
	// clear user storage
	handleLogout = async () => {
		await localStorage.clear();
		await this.props.history.push('/login');
		await Store.dispatch({ type: 'LOGOUT' });
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleLogout} type="button">logout</button>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit
						{' '}
						<code>src/App.js</code>
						{' '}
and save to reload.
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
