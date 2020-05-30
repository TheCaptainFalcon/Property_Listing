import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../Actions/authActions';
import classnames from 'classnames';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            email: '',
            password: '',
            errors: {}
        }

        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/listings');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/listings');
        }

        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData)
    }

    render() { 
        const errors = this.state.errors;

        return (  
            <div>
                <p>This is the login</p>
                <form onSubmit={this.handleSubmit}>
                    <label/> Email
                    <input
                        name="email"
                        className={classnames({ 'is-invalid' : errors.email })}
                        type="email"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    <input
                        name="password"
                        className={classnames({ 'is-invalid' : errors.password })}
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    <input
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

loginUser.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);