const router = require('express').Router();
const careLogsCtrl = require('../controllers/careLogs');

// routing a post request to create from the server to the plant._id
// now go to controllers to create the create function
router.post('/plants/:id', careLogsCtrl.create);

module.exports = router;