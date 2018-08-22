const router = require('express').Router();
const controller = require('./services.controller.js');
const checkLog = require('../../services/authorization/authorization');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.createService);
router.delete('/:id', checkLog, controller.deleteService);

module.exports = router;