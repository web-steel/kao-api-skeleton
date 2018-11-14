'use strict';

const ExtendableError = require('es6-error');
const { NotFound } = require('../constants/error');
const statusCodes = require('../constants/statusCodes');

function errorHandler() {
    return async (ctx, next) => {
        try {
            await next();

            if (!ctx.body
                && (!ctx.status
                    || ctx.status === statusCodes.NOT_FOUND
                    || ctx.status === statusCodes.METHOD_NOT_ALLOWED))
                throw new NotFound();
        } catch (err) {
            if (err instanceof ExtendableError) {
                ctx.res.error({
                    statusCode: err.statusCode,
                    code: err.code,
                    message: err.message,
                });
            } else {
                ctx.res.error({
                    status: 500,
                    code: 'UNKNOWN_ERROR',
                    message: 'The server encountered an unknown error.',
                });
            }
            ctx.app.emit('error', err, ctx);
        }
    };
}

module.exports = errorHandler;