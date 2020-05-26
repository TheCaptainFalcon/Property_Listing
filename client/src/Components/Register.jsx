// Remove in production version...

import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: "",
            email: "",
            password: "",
            password2: "",
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
            .catch(err => console.log(err.response.data))

        
        // fetch('http://localhost:5000/users/register', {
        //     method: 'POST',
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //       },
        //     body: JSON.stringify(newUser),

    }
        
        

    HandleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() { 
        return (  
            <div>
                <p>Register for dev purposes</p>
                <form onSubmit={this.HandleSubmit}>
                    <label/>Name
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter your name" 
                        value={this.state.name}
                        onChange={this.HandleChange}
                        required
                    />
                    <label/> Email
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={this.state.email}
                        onChange={this.HandleChange}
                        required
                    />
                    <label/> Password
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="Enter a password with 6+ characters" 
                        value={this.state.password}
                        onChange={this.HandleChange}
                        required
                    />
                    <label/> Confirm Password
                    <input 
                        name="password2" 
                        type="password" 
                        placeholder="Reenter your password" 
                        value={this.state.password2}
                        onChange={this.HandleChange}
                        required
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
 
export default Register;