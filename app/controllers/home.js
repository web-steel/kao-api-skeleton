"use strict";

class HomeController {

    /**
     *
     * @param {ctx} ctx Koa context
     */
    index(ctx) {
        ctx.body = "START API";
    }
}

module.exports = HomeController;