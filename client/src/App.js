import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Home from './Components/Home';
import Listings from './Components/Listings';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar className='App-nav' bg="dark" variant="dark">
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings'>Listings</NavLink></Nav.Link>
          <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/login'>Login</NavLink></Nav.Link>
         </Navbar>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path ='/listings' component={ Listings } />
          <Route exact path ='/users/login' component={ Login } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
