const Plant = require('../models/plant');
const Plantista = require('../models/plantista');

module.exports = {
    new: newPlant
}

function newPlant(req, res){
    console.log('add new plant')
    res.render('plants/new');
};