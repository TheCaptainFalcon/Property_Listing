import React, { Component } from 'react';
import { Navbar, NavLink, Nav } from 'react-bootstrap';

class NavComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return (  
            <Navbar className='App-nav' bg="dark" variant="dark">

            DESTRUCTURE THIS INTO A NAVBAR COMPONENT 
            <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/listings'>Listings</NavLink></Nav.Link>
            <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/login'>Login</NavLink></Nav.Link>
            
            <Nav.Link><NavLink activeClassName='active-link' exact={true} to='/users/register'>Register</NavLink></Nav.Link>
      
          </Navbar>
        );
    }
}
 
export default NavComp;
