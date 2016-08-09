var router = require('express').Router();
var controllers = require('../controllers/indexAPI.js')['controllers'];

for(route in controllers){
	router.get('/'+route, controllers[route].get)
	router.post('/'+route, controllers[route].post)
	router.put('/'+route, controllers[route].put)
	router.delete('/'+route, controllers[route].delete)
}

module.exports = router;
