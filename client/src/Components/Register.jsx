// Remove in production version...

import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../Actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Card, Button } from 'react-bootstrap';

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

    // Refactor to static getDerivedStateFromProps + ComponentDidMount for state
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
                <Wrapper>
                    <FormWrapper>
                        <Card>
                            <CardTitle>Registration Form</CardTitle>
                            <form onSubmit={this.HandleSubmit} style={{margin:'auto 1.5rem'}}>
                                <Form.Group>
                                    <BoldLabel/>Name
                                    <Form.Control
                                        name="name" 
                                        className={classnames({ 'is-invalid' : errors.name })}
                                        type="text" 
                                        placeholder="Enter your name" 
                                        value={this.state.name}
                                        onChange={this.HandleChange}
                                        required
                                    />
                                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                </Form.Group>
                                <Form.Group>
                                    <BoldLabel/>Email
                                    <Form.Control
                                        name="email" 
                                        className={classnames({ 'is-invalid' : errors.email })}
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={this.state.email}
                                        onChange={this.HandleChange}
                                        required
                                    />
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </Form.Group>
                                <Form.Group>
                                    <BoldLabel/>Password
                                    <Form.Control 
                                        name="password" 
                                        className={classnames({ 'is-invalid' : errors.password })}
                                        type="password" 
                                        placeholder="Enter a password with 6+ characters" 
                                        value={this.state.password}
                                        onChange={this.HandleChange}
                                        required
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </Form.Group>
                                <Form.Group>
                                    <BoldLabel/>Confirm Password
                                    <Form.Control
                                        name="password2"
                                        className={classnames({ 'is-invalid' : errors.password2 })} 
                                        type="password" 
                                        placeholder="Reenter your password" 
                                        value={this.state.password2}
                                        onChange={this.HandleChange}
                                        required
                                    />
                                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
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