const router = require('express').Router();
const plantistasCtrl = require('../controllers/plantistas');


// GET /plantistas
router.get('/plantistas', plantistasCtrl.index);
router.get('/plantistas/new', plantistasCtrl.new);
router.post('/plants/new', plantistasCtrl.create);



// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware
	res.redirect('/auth/google');
}



module.exports = router;
