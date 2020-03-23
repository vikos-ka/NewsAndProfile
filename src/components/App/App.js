import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';
import Navbar from '../Navbar';
import Home from '../Home';
import LoginPage from '../Login/LoginPage';
import NewsPage from '../News/NewsPage'
import Profile from '../Profile'
import { logoutUser } from '../../store/actions/auth';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="test__app">
          <Navbar isAuth = {this.props.isAuthenticated} logoutUser={logoutUser} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/profile" 
            render={ () => (this.props.isAuthenticated
              ? (<Profile />)
              :  (<Redirect to= "/login" />)
            )}
              />
            

          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
