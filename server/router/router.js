var router = require('express').Router();
var controller = require('./controllers/indexAPI.js');

for(var route in controller) {
	router.route('/' + route)
		.get(controller[route].get)
		.post(controller[route].post)
		.put(controller[route].put)
		.delete(controller[route].delete);
}

module.exports = router;

// example for authentication
// router.post('/', helpers.tokenCheck, controllers['/'].post);
