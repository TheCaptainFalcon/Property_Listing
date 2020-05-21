const Valdiator = require('validator');
const isEmpty = require ('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!Valdiator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if(Valdiator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }
    
    if(Valdiator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors: errors,
        inavlid: isEmpty(errors)
    }
}