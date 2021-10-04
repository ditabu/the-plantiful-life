const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.new);
// POST /plants route our form in plants/new.ejs is submitting to
router.post('/', plantsCtrl.create);

module.exports = router;
