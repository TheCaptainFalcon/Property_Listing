import React, {Component} from 'react';
import './App.css'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './Actions/authActions';
import store from './store';
import { connect } from 'react-redux';
import { logoutUser } from './Actions/authActions';
import NavComp from './Components/NavComp';

// Check for token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  
  // check if store and redux needs to be swapped to here
  // instead of index.js
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // redirect to login
    window.location.href = '/users/login';
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (<NavComp/>);
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser }) (App);