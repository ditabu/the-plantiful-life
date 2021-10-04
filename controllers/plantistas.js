const Plantista = require('../models/plantista');

module.exports = {
  index, 
  new: newPlantistaPage,
  create

};


function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Plantista.find(modelQuery)
  .sort(sortKey).exec(function(err, plantistas) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('plantistas/index', {
      plantistas,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function newPlantistaPage(req, res){
  console.log('attempt to hit new route')
  res.render('plantistas/new');
};

function create(req, res){
  console.log(req.body, 'create')
  res.send('added new plant');
};
