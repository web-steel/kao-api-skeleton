"use strict";

const router = require('koa-router')();
const HomeController = require('../controllers/home');

const homeController = new HomeController();

const routers = router.get('/', homeController.index);

module.exports = routers;