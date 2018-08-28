const router = require('express').Router();
const controller = require('./users.controller.js');
const checkLog = require('../../services/authorization/authorization');

// router.get('/', checkLog, controller.getAll);
router.get('/:id', checkLog, controller.getById);
router.post('/', controller.createUser);
router.delete('/:id', checkLog, controller.deleteUser);
router.post('/add-instance/:id', controller.addInstanceToUser);
router.delete('/delete-instance/:id/:instanceId', controller.deleteInstanceToUser);
router.delete('/delete-all-instances/:id', controller.deleteAllProjects);

module.exports = router;