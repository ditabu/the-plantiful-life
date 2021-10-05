const router = require('express').Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index);
router.get('/new', plantsCtrl.new);
router.get('/:id', plantsCtrl.show);
// POST /plants route our form in plants/new.ejs is submitting to
router.post('/', plantsCtrl.create);
// router.delete('/:id', plantsController.delete);

module.exports = router;
