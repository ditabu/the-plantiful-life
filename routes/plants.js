const router = require('express').Router();
const plantsCtrl = require('../controllers/plants');

router.get('/', plantsCtrl.index); //begin your journey start page
router.get('/new', plantsCtrl.new); //add a new plant page
router.get('/:id', plantsCtrl.show); //plant._id details page
// POST /plants route our form in plants/new.ejs is submitting to
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete); //routes to plants list so only user can delete their post
router.get('/:id/edit', plantsCtrl.edit); //get to plant details edit page to edit
router.put('/:id/edit/update', plantsCtrl.update); //put the changes in update page


module.exports = router;
