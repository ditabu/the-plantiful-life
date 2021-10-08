const router = require('express').Router();
const careLogsCtrl = require('../controllers/careLogs');

router.post('/plants/:id', careLogsCtrl.create);

module.exports = router;