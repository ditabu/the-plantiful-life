const Plant = require('../models/plant');


module.exports = {
    new: newPlant
}

function newPlant(req, res){
    console.log('add new plant')
    res.render('plants/new');
};