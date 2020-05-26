// Remove in production version...

import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';

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

    HandleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name : this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        axios.post('http://localhost:5000/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data}))
    }
    
    HandleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() { 
        const errors = this.state.errors;

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
 
export default Register;