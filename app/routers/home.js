"use strict";

const Router = require('koa-router');
const HomeController = require('../controllers/home');

const router = new Router();
const homeController = new HomeController();

router.get('/', homeController.index);

module.exports = router.routes();