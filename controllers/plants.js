const Plant = require('../models/plant');


module.exports = {
    new: newPlant,
    create
}

function newPlant(req, res){
    console.log('add new plant')
    res.render('plants/new');
};

function create(req, res){
    console.log(req.body)
    res.send('added new plant')
}