var router = require('express').Router();
var controller = require('../controllers/indexAPI.js');

router.get('/user', controller['user'].get);
router.get('/organization', controller['organization'].get);
router.get('/emergency', controller['emergency'].get);

router.post('/user', controller['user'].post);
router.post('/organization', controller['organization'].post);
router.post('/emergency', controller['emergency'].post);

router.put('/user', controller['user'].put);
router.put('/organization', controller['organization'].put);
router.put('/emergency', controller['emergency'].put);

router.delete('/user', controller['user'].delete);
router.delete('/organization', controller['organization'].delete);
router.delete('/emergency', controller['emergency'].delete);

module.exports = router;
