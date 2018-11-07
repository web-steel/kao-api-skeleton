"use strict";

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');
const router = require('./routers');
const errorHandler = require('./middleware/errorHandler');
const requestId = require('./middleware/requestId');
const responseTime = require('koa-response-time');
const responseHandler = require('./middleware/responseHandler');
const compress = require('koa-compress');
const validator = require('node-input-validator');
const overrideValidator = require('./middleware/validation');
const RateLimit = require('koa2-ratelimit').RateLimit;

const limiter = RateLimit.middleware({
    interval: { min: 15 },
    max: 100
});

const app = new Koa();

app.proxy = true;

app.use(validator.koa());
app.use(overrideValidator());
app.use(responseHandler());
app.use(responseTime());
app.use(compress());
app.use(limiter);
app.use(
    bodyParser({
        enableTypes: ['json', 'form'],
        formLimit: '10mb',
        jsonLimit: '10mb'
    })
);
app.use(helmet());
app.use(requestId());
app.use(
    cors({
        origin: '*',
        allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
        exposeHeaders: ['X-Request-Id']
    })
);
app.use(errorHandler());

// Routing
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;