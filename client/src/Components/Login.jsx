import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../Actions/authActions';
import classnames from 'classnames';
import { Card, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const FormWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 1rem 1rem 1rem;
    padding: 1rem;
    background-color: papayawhip;
`;

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BoldLabel = styled.label`
    display: flex;
    justify-content: center;
    color: black;
    font-weight: bold;
    margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin: 0.5rem auto 1rem auto;
`;

const CardTitle = styled.h1`
    display: flex;
    font-weight: bold;
    justify-content: center;
    margin: 1rem 2rem 0.25rem 2rem;
`;

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
                <Wrapper>
                    <FormWrapper>
                        <Card>
                            <CardTitle>Login</CardTitle>
                            <form onSubmit={this.handleSubmit} style={{margin:'auto 1.5rem'}}>
                                <Form.Group>
                                <BoldLabel/> Email
                                    <Form.Control
                                        name="email"
                                        className={classnames({ 'is-invalid' : errors.email })}
                                        type="email"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </Form.Group>
                                <Form.Group>
                                <BoldLabel/> Password
                                    <Form.Control
                                        name="password"
                                        className={classnames({ 'is-invalid' : errors.password })}
                                        type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </Form.Group>
                                <ButtonWrapper>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </ButtonWrapper>
                            </form>
                        </Card>
                    </FormWrapper>
                </Wrapper>
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