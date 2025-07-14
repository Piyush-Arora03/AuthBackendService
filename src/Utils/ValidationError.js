const ErrorHandler = require('./ErrorHandler');
const { StatusCodes } = require('http-status-codes');

class ValidationError extends ErrorHandler {
    constructor(error) {
        let name = error.name;
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });

        super(
            name,
            'Something went wrong while signup',
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError