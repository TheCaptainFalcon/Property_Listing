import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';
import Register from './Components/Register';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './Actions/authActions';
import store from './store';

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
}


function App() {
  return (
        <Router>
        <Navbar className='App-nav' bg="dark" variant="dark">
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings'>Listings</NavLink></Nav.Link>
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/login'>Login</NavLink></Nav.Link>
          
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/register'>Register</NavLink></Nav.Link>
    
         </Navbar>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path ='/listings' component={ Listings } />
          <Route exact path ='/users/login' component={ Login } />

          <Route exact path ='/users/register' component={ Register } />

        </Switch>
      </Router>
  );
}

export default App;
