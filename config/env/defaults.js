"use strict";

let pkg = require('../../package');

const config = {
    app: {
        name: pkg.name,
        version: pkg.version,
    },
    worker: process.env.NODE_WORKER_NAME,
    port: process.env.PORT || 3000,
    logger: {
        level: 'info',
        format: 'tiny',
    },
};

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config.env = process.env.NODE_ENV;

module.exports = config;