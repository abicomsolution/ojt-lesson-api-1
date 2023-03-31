var express = require('express');
var controller = require('./controller');

var routes = express.Router();


routes.get('/get-test', function(req, res) {
	controller.getTest(res);
});

module.exports =  routes