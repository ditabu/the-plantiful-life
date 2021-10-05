// Plant is our Model object that can talk to the db
const Plant = require('../models/plant');


module.exports = {
    new: newPlant,
    create, 
    index, 
    show, 
    // delete: deletePlant

}

// function deletePlant(req, res){
//     Plant.deleteOne(req.params.id);

//     res.redirect('/plants');
// }

function show(req, res){
    Plant.findById(req.params.id, function(err, plantDoc) {
        console.log(plantDoc, 'plant doc show')
        res.render('plants/show', { plantName: 'Plant Details', plant: plantDoc });
    });
}

function index(req, res){
    Plant.find({}, function(err, plantsDoc){
        // console.log(err, 'why is this an error')
        console.log(plantsDoc, 'plants doc')
        res.render('plants/index', {
            plants: plantsDoc
        })
    })
};

function newPlant(req, res){
    console.log('add new plant')
    res.render('plants/new');
};

function create(req, res){
    console.log(req.body) //matches the plantSchema
    Plant.create(req.body, function(err, createdPlant){
        if(err) return res.direct('/plants/new');
        console.log(createdPlant, "createdPlant");
        res.redirect('/plants')
    })
    //res.send('added new plant') //works when I click on Add New Plant button
};