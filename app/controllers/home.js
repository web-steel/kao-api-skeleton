"use strict";

class HomeController {

    /**
     *
     * @param {ctx} ctx Koa context
     */
    index(ctx) {
        ctx.body = "Welcome a koa2-api-skeleton";
    }
}

module.exports = HomeController;