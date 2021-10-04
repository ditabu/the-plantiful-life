const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/new', plantsCtrl.new);
router.post('/plants', plantsCtrl.create);

module.exports = router;
