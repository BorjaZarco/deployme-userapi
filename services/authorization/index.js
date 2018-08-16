const router = require('express').Router();
const controller = require('./autho.controller')


router.post('/', controller.createUserToken);

module.exports = router;