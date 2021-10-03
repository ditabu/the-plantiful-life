module.exports = {
    new: newPlant
}

function newPlant(req, res){

    res.render('plants/new')
}