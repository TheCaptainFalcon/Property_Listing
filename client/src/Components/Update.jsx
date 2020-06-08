import React, { Component } from 'react';
import { createListing } from '../Actions/listingActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Form, Col, Card, Button } from 'react-bootstrap';
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
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            address: '',
            city: '',
            state: '',
            zip: '',
            br: '',
            ba: '',
            price: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // Refactor to static getDerivedStateFromProps + ComponentDidMount for state
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const newListing = {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            br: this.state.br,
            ba: this.state.ba,
            price: this.state.price

        }
        this.props.createListing(newListing, this.props.history);
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            address: '',
            city: '',
            state: '',
            zip: '',
            br: '',
            ba: '',
            price: '',
        });
    };

    render() { 
        const errors = this.state.errors;

        return (  
            <div>
                <Wrapper>
                    <FormWrapper>
                        <Card>
                            <CardTitle >Listings Form</CardTitle>
                            <form onSubmit={this.handleSubmit} style={{margin: 'auto 1rem'}}>
                                <Form.Group controlId="formGridAddress1">
                                    <BoldLabel>Address</BoldLabel>
                                    <Form.Control 
                                        name='address'
                                        className={classnames({ 'is-invalid' : errors.address})}
                                        type='varchar'
                                        placeholder='Address'
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    {errors.address && (<div className="invalid-feedback">{errors.address}</div>)}
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <BoldLabel>City</BoldLabel>
                                        <Form.Control 
                                            name='city'
                                            className={classnames({ 'is-invalid' : errors.city})}
                                            type='text'
                                            placeholder='City'
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        {errors.city && (<div className="invalid-feedback">{errors.city}</div>)}
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <BoldLabel>State</BoldLabel>
                                            <Form.Control 
                                                name='state'
                                                className={classnames({ 'is-invalid' : errors.state})}
                                                type='text'
                                                placeholder='State'
                                                value={this.state.state}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.state && (<div className="invalid-feedback">{errors.state}</div>)}
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <BoldLabel>Zip</BoldLabel>
                                            <Form.Control 
                                                name='zip'
                                                className={classnames({ 'is-invalid' : errors.zip})}
                                                type='number'
                                                placeholder='Zipcode'
                                                value={this.state.zip}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.zip && (<div className="invalid-feedback">{errors.zip}</div>)}
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridBr">
                                        <BoldLabel>BR</BoldLabel>
                                            <Form.Control
                                                name='br'
                                                className={classnames({ 'is-invalid' : errors.br})}
                                                type='number'
                                                placeholder='# of Bedrooms'
                                                value={this.state.br}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.br && (<div className="invalid-feedback">{errors.br}</div>)}
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridBa">
                                        <BoldLabel>BA</BoldLabel>
                                            <Form.Control 
                                                name='ba'
                                                className={classnames({ 'is-invalid' : errors.ba})}
                                                type='number'
                                                placeholder='# of Bathrooms'
                                                value={this.state.ba}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.ba && (<div className="invalid-feedback">{errors.ba}</div>)}
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <BoldLabel>Price</BoldLabel>
                                            <Form.Control 
                                                name='price'
                                                className={classnames({ 'is-invalid' : errors.price})}
                                                type='number'
                                                placeholder='Price'
                                                value={this.state.price}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {errors.price && (<div className="invalid-feedback">{errors.price}</div>)}      
                                    </Form.Group>
                                </Form.Row>
                                <ButtonWrapper>
                                    <Button variant="primary" type="submit">Submit</Button>
                                    <Button 
                                        variant="danger" 
                                        type="submit"
                                        onClick={this.handleReset}
                                        >Reset
                                    </Button>
                                </ButtonWrapper>
                            </form>
                        </Card>
                    </FormWrapper>
                </Wrapper>
            </div>
        );
    }
}
 
Update.propTypes = {
    createListing: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    errors: state.errors
});

export default connect(mapStateToProps, { createListing })(withRouter(Update));