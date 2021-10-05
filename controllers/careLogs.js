const Plant = require('../models/plant')

module.exports = {
    create
}

function create(req, res){
    console.log(req.body)
    res.send('care logs')
};