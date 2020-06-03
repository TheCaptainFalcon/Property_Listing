import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

import Home from './Home';
import Listings from './Listings';
import Login from './Login';
import Register from './Register';
import Update from './Update';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../Actions/authActions';

class NavComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            logoutModalShow : false,
            seconds: 5
        }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleHideLogoutModal = this.handleHideLogoutModal.bind(this);
    this.startTimer = this.startTimer.bind(this);

    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logoutUser();
        this.setState({
            logoutModalShow : true
        });
    };

    handleHideLogoutModal() {
        this.setState({
            logoutModalShow : false
        });
    };

    startTimer() {
        if(this.state.seconds > 0) {
            let timer = setInterval(() => this.setState({ seconds : this.state.seconds - 1 }), 1000)
            setTimeout(() => clearInterval(timer), 5000)
            setTimeout(() => this.setState({ logoutModalShow : false, seconds: 5 }), 5000)
        } 
    };
    

    render() { 
        const { isAuthenticated, user } = this.props.auth;
        const seconds = this.state.seconds;

        const authLinks = (
            <Navbar className='App-nav' bg="dark" variant="dark">
                <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings/update'>Update Listings</NavLink></Nav.Link>
                <Nav.Link><NavLink onClick={this.handleLogout} to='/'>Logout</NavLink></Nav.Link>
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

                    {this.state.logoutModalShow ?  
            
                    <Modal show={this.handleLogout} onHide={this.handleHideLogoutModal} onEntered={this.startTimer}>
                        <Modal.Header closeButton>
                            <Modal.Title>Successfully Logged out!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Automatically redirecting in {seconds} seconds... </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleHideLogoutModal}>
                                Confirm <FontAwesomeIcon icon={faCheck}/>
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    : null } 

                </Navbar>
                <Switch>
                    <Route exact path = '/' component={ Home } />
                    <Route exact path = '/listings' component={ Listings } />
                    <Route exact path = '/users/login' component={ Login } />
                    <Route exact path = '/users/register' component={ Register } />
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