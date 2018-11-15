"use strict";

const config = require('../config');
const app = require('./app');

const server = app.listen(config.port, () => {
    console.log('%s listening at port %d', config.app.name, config.port);
});

module.exports = server;