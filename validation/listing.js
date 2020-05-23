const Validator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateListingInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, { min: 10, max: 500 })) {
        errors.text = 'Text must be betwen 10 and 500 characters';
    }

    if(Validator.isEmpty(data.text)) {
        errors.text = "Text field is required";
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}