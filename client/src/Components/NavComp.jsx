import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Listings from './Listings';
import Login from './Login';
import Register from './Register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/authActions';

class NavComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() { 
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Navbar className='App-nav' bg="dark" variant="dark">
                <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings/update'>Update Listings</NavLink></Nav.Link>
                <Nav.Link><NavLink activeClassName='active-link' exact={true} onClick={this.handleLogout} to='/'>Logout</NavLink></Nav.Link>
            </Navbar>
        );

        const guestLinks = (
            <Navbar className='App-nav' bg="dark" variant="dark">
                <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/register'>Register</NavLink></Nav.Link>
                <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/login'>Login</NavLink></Nav.Link>
            </Navbar>
        );

        return (  
            <Router>
                <Navbar className='App-nav' bg="dark" variant="dark">
                    <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings'>Listings</NavLink></Nav.Link>
                    {isAuthenticated ? authLinks : guestLinks }
                </Navbar>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path ='/listings' component={ Listings } />
                    <Route exact path ='/users/login' component={ Login } />
                    <Route exact path ='/users/register' component={ Register } />
                    <Route exact path = '/listings/search' />
                    <Route exact path = '/listings/update' component = { Update } />
                </Switch>
            </Router>
        );
    };
};
 
NavComp.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser }) (NavComp);