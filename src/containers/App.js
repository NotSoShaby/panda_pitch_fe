import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorized from '../routes/authorized';

class App extends Authorized {
	// clear user storage
	handleLogout = () => {
		localStorage.clear();
		this.props.history.push('/login');
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleLogout}>logout</button>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
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
