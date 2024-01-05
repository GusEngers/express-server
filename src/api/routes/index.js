const api = require('express').Router();

const { homeController } = require('../controllers');

api.route('/').get(homeController);

module.exports = api;
