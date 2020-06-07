const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateListingInput(data) {
    let errors = {};


    data.address = !isEmpty(data.address) ? data.address : '';
    data.city = !isEmpty(data.city) ? data.city : '';
    data.state = !isEmpty(data.state) ? data.state : '';
    data.zip = !isEmpty(data.zip) ? data.zip : '';
    data.br = !isEmpty(data.br) ? data.br : '';
    data.ba = !isEmpty(data.ba) ? data.ba : '';
    data.price = !isEmpty(data.price) ? data.price : '';



    // Address
    if(!Validator.isLength(data.address, { min: 10, max: 50 })) {
        errors.address = 'Address must be between 10 and 50 characters';
    }

    if(Validator.isEmpty(data.address)) {
        errors.address = "Address field is required";
    }

    // City
    if(!Validator.isLength(data.city, { min: 3, max: 25 })) {
        errors.city = 'Text must be between 3 and 25 characters';
    }

    if(Validator.isEmpty(data.city)) {
        errors.city = "City field is required";
    }

    // State
    if(!Validator.isLength(data.state, { min: 3, max: 25 })) {
        errors.state = 'Text must be between 3 and 25 characters';
    }

    if(Validator.isEmpty(data.state)) {
        errors.state = "State field is required";
    }
    // Zip
    if(!Validator.isLength(data.zip, { min: 5, max: 5 })) {
        errors.zip = 'Zipcode must be 5 characters';
    }

    if(Validator.isEmpty(data.zip)) {
        errors.zip = "Zipcode field is required";
    }
    // BR
    if(!Validator.isLength(data.br, { min: 1, max: 3 })) {
        errors.br = 'BR must be between 1 and 3 characters';
    }

    if(Validator.isEmpty(data.br)) {
        errors.br = "BR field is required";
    }
    // BA
    if(!Validator.isLength(data.ba, { min: 1, max: 3 })) {
        errors.ba = 'BA must be between 1 and 3 characters';
    }

    if(Validator.isEmpty(data.ba)) {
        errors.ba = "BA field is required";
    }
    // Price
    if(!Validator.isLength(data.price, { min: 1, max: 10 })) {
        errors.price = 'Price must be between 1 and 10 characters';
    }

    if(Validator.isEmpty(data.price)) {
        errors.price = "Price field is required";
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}