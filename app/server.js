"use strict";

const config = require('../config');
const app = require('./app');

(async () => {
    try {
        await app.listen(config.port);
        console.log('%s listening at port %d', config.app.name, config.port);
    } catch (e) {
        console.log(e);
    }
})();