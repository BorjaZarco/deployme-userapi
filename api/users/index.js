const router = require('express').Router();
const controller = require('./users.controller.js');
const checkLog = require('../../services/authorization/authorization');

router.get('/', checkLog, controller.getAll);
router.get('/:id', checkLog, controller.getById);
router.post('/', controller.createUser);
router.delete('/:id', checkLog, controller.deleteUser);

module.exports = router;