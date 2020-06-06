import React, { Component } from 'react';
import { createListing } from '../Actions/listingActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title : '',
            text: '',
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
            title: this.state.title,
            text: this.state.text,
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


    render() { 
        const errors = this.state.errors;
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label/>Title
                    <input
                        name='title'
                        className={classnames({ 'is-invalid' : errors.text })}
                        type='varchar'
                        placeholder='Enter a name'
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}

                    <label/>Text
                    <input
                        name='text'
                        className={classnames({ 'is-invalid' : errors.text})}
                        type='varchar'
                        placeholder='Enter a name'
                        value={this.state.text}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.text && (<div className="invalid-feedback">{errors.text}</div>)}

                    <label/>Address
                    <input
                        name='address'
                        className={classnames({ 'is-invalid' : errors.address})}
                        type='varchar'
                        placeholder='Enter the address.'
                        value={this.state.address}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.address && (<div className="invalid-feedback">{errors.address}</div>)}
                    
                    <label/>City
                    <input
                        name='city'
                        className={classnames({ 'is-invalid' : errors.city})}
                        type='text'
                        placeholder='Enter the city.'
                        value={this.state.city}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.city && (<div className="invalid-feedback">{errors.city}</div>)}

                    <label/>State
                    <input
                        name='state'
                        className={classnames({ 'is-invalid' : errors.state})}
                        type='text'
                        placeholder='Enter the state.'
                        value={this.state.state}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.state && (<div className="invalid-feedback">{errors.state}</div>)}

                    <label/>Zip
                    <input
                        name='zip'
                        className={classnames({ 'is-invalid' : errors.zip})}
                        type='varchar'
                        placeholder='Enter the zipcode.'
                        value={this.state.zip}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.zip && (<div className="invalid-feedback">{errors.zip}</div>)}

                    <label/>BR
                    <input
                        name='br'
                        className={classnames({ 'is-invalid' : errors.br})}
                        type='number'
                        placeholder='Enter the number of bedrooms.'
                        value={this.state.br}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.br && (<div className="invalid-feedback">{errors.br}</div>)}

                    <label/>BA
                    <input
                        name='ba'
                        className={classnames({ 'is-invalid' : errors.ba})}
                        type='number'
                        placeholder='Enter the number of bathrooms'
                        value={this.state.ba}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.ba && (<div className="invalid-feedback">{errors.ba}</div>)}

                    <label/>Price
                    <input
                        name='price'
                        className={classnames({ 'is-invalid' : errors.price})}
                        type='number'
                        placeholder='Enter price amount'
                        value={this.state.price}
                        onChange={this.handleChange}
                        required
                    />
                    {errors.price && (<div className="invalid-feedback">{errors.price}</div>)}      

                    <input 
                        type='submit'
                    />
                </form>
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