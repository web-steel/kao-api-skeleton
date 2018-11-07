'use strict';

const ExtendableError = require('es6-error');
const statusCodes = require('../constants/statusCodes');

exports.InternalError = class InternalError extends ExtendableError {
    constructor() {
        super();
        this.statusCode = statusCodes.INTERNAL_SERVER_ERROR;
        this.code = 'INTERNAL_ERROR';
        this.message = 'The server encountered an internal error.';
    }
};

exports.NotFound = class notFound extends ExtendableError {
    constructor() {
        super();
        this.statusCode = statusCodes.NOT_FOUND;
        this.code = 'UNKNOWN_ENDPOINT';
        this.message = 'The requested endpoint does not exist.';
    }
};

exports.BadRequest = class BadRequest extends ExtendableError {
    constructor(errors) {
        super(errors);
        this.statusCode = statusCodes.BAD_REQUEST;
        this.code = 'BAD_REQUEST';
        this.message = errors;
    }
};

exports.UnprocessableEntity = class UnprocessableEntity extends ExtendableError {
    constructor(errors) {
        super(errors);
        this.statusCode = statusCodes.UNPROCESSABLE_ENTITY;
        this.code = 'UNPROCESSABLE_ENTITY';
        this.message = errors;
    }
};