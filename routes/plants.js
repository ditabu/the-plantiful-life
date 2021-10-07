const router = require('express').Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index); //begin your journey start page
router.get('/new', plantsCtrl.new); //add a new plant page
router.get('/:id', plantsCtrl.show); //details page
// POST /plants route our form in plants/new.ejs is submitting to
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete);
router.get('/:id/edit', plantsCtrl.edit);
router.post('/:id/edit', plantsCtrl.edit);


module.exports = router;
