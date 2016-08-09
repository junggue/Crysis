var router = require('express').Router();
var controllers = require('../controllers/indexAPI.js')['controllers'];
var authControllers = require('../controllers/indexAPI.js')['authControllers'];
var middleware = require('../utils/middleware.js');

for(route in controllers){
	router.get('/'+route, middleware.tokenCheck, controllers[route].get)
	router.post('/'+route, middleware.tokenCheck, controllers[route].post)
	router.put('/'+route, middleware.tokenCheck, controllers[route].put)
	router.delete('/'+route, middleware.tokenCheck, controllers[route].delete)
}

for(route in authControllers){
	router.get('/'+route, authControllers[route].get)
	router.post('/'+route, authControllers[route].post)
	router.put('/'+route, authControllers[route].put)
	router.delete('/'+route, authControllers[route].delete)
}

module.exports = router;
