const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/plants/new', plantsCtrl.new);

module.exports = router;
