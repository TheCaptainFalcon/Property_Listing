const Valdiator = require('validator');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    if(!Valdiator.isLength(data.name, { min: 2, max: 30 })) {
        erros.name = "Name must be between 2 and 30 characters"
    }
    return {
        errors: errors,
        inavlid: errors
    }
}