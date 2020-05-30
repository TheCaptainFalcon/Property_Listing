// Remove in production version...

import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../Actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/listings');
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    HandleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name : this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history);
    }
    
    HandleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() { 
        const errors = this.state.errors;

        // equal to const user = this.props.auth.user
        // const { user } = this.props.auth;

        return (  
            <div>
                <p>Register for dev purposes</p>
                <form onSubmit={this.HandleSubmit}>
                    <label/>Name
                    <input 
                        name="name" 
                        className={classnames({ 'is-invalid' : errors.name })}
                        type="text" 
                        placeholder="Enter your name" 
                        value={this.state.name}
                        onChange={this.HandleChange}
                        required
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    <label/> Email
                    <input 
                        name="email" 
                        className={classnames({ 'is-invalid' : errors.email })}
                        type="email" 
                        placeholder="Enter your email" 
                        value={this.state.email}
                        onChange={this.HandleChange}
                        required
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    <label/> Password
                    <input 
                        name="password" 
                        className={classnames({ 'is-invalid' : errors.password })}
                        type="password" 
                        placeholder="Enter a password with 6+ characters" 
                        value={this.state.password}
                        onChange={this.HandleChange}
                        required
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    <label/> Confirm Password
                    <input 
                        name="password2"
                        className={classnames({ 'is-invalid' : errors.password2 })} 
                        type="password" 
                        placeholder="Reenter your password" 
                        value={this.state.password2}
                        onChange={this.HandleChange}
                        required
                    />
                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));