const router = require('express').Router();
const controller = require('./autho.controller')


router.post('/', controller.createUserToken);
router.get('/', controller.isLogged);

module.exports = router;