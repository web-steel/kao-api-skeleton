'use strict';

const statusCodes = require('../constants/statusCodes');

function responseHandler() {
    return async (ctx, next) => {
        ctx.res.statusCodes = statusCodes;
        ctx.statusCodes = ctx.res.statusCodes;

        ctx.res.success = ({ statusCode, data = null }) => {
            const status = 'success';

            if (!!statusCode && (statusCode < 400))
                ctx.status = statusCode;
            else if (!(ctx.status < 400))
                ctx.status = statusCodes.OK;

            ctx.body = { status, data };
        };

        ctx.res.error = ({ statusCode, code, message = null }) => {
            const status = 'error';

            if (!!statusCode && (statusCode >= 400 && statusCode < 600))
                ctx.status = statusCode;
            else if (!(ctx.status >= 500 && ctx.status < 600))
                ctx.status = statusCodes.INTERNAL_SERVER_ERROR;

            ctx.body = { status, code, message };
        };

        ctx.res.ok = (params = {}) => {
            ctx.res.success({
                ...params,
                statusCode: statusCodes.OK,
            });
        };

        ctx.res.created = (params = {}) => {
            ctx.res.success({
                ...params,
                statusCode: statusCodes.CREATED,
            });
        };

        ctx.res.accepted = (params = {}) => {
            ctx.res.success({
                ...params,
                statusCode: statusCodes.ACCEPTED,
            });
        };

        ctx.res.noContent = () => {
            ctx.res.success({
                statusCode: statusCodes.NO_CONTENT,
            });
        };

        await next();
    };
}

module.exports = responseHandler;