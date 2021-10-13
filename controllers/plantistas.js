const Plantista = require('../models/plantista');
const Plant = require('../models/plant');


module.exports = {
  index, 
  new: newPlantista,
  create

};


function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  // Make the query object to use with Plantista.find based up
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
      name: req.query.name,
      sortKey
    });
  });
}

function newPlantista(req, res){
  //create new plantista page with buttons on what they would like to do today
  console.log('attempt to hit new route')
  res.render('plantistas/new');
};

function create(req, res){
  console.log(req.body, 'send to new plant add page')
  res.render('plants/new');

};
