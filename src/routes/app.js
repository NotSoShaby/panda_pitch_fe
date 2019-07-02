import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { logout } from '../redux/actions/app';
import Header from '../components/header';
import Home from '../containers/home';

class App extends Component {
  handleLogout = () => {
    let { history } = this.props;
    localStorage.clear();
    logout()
		history.push('/login');
  }

  render(){
    return (
      <div className="wrapper">
        <Header/>
				<Route exact path="/" component={(props) => <Home {...props} />} />

        {/* <div>Header</div>
        <button onClick={this.handleLogout}>logout</button>
        <div>Footer</div> */}
      </div>
    )
  }
}

export default App
