const router = require('express').Router();
const careLogsCtrl = require('../controllers/careLogs');

router.post('/:id/careLogs', careLogsCtrl.create);

module.exports = router;