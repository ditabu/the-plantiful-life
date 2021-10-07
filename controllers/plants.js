// Plant is our Model object that can talk to the db
const Plant = require('../models/plant');



module.exports = {
    new: newPlant,
    create,
    index, 
    show, 
    delete: deletePlant,
    edit,
    update: updatePlant
};

function updatePlant(req, res) {
    console.log(req.body, req.params, 'update Plant')
    const currentUser = req.user ? req.user._id : ''
    Plant.findById(req.params.id, function(err, plant) {
        console.log(plant, 'find updated plant')
        res.redirect('/plants/:id/edit/update', { plant, currentUser });
    });
}

function edit(req, res) {
    console.log(req.body, req.params, 'edit')
    const currentUser = req.user ? req.user._id : ''
    Plant.findById(req.params.id, function(err, plant) {
        console.log(plant, 'edit plant')
        res.render('plants/edit', { plant, currentUser });
    });
}


function deletePlant(req, res){
    // if req.user equals plant findbyId if it matches, then redirect, and i need an edit
    
    Plant.deleteOne({_id: req.params.id}, function(err, plant) {
        console.log('deleted plant: ', plant)
        const currentUser = req.user ? req.user._id : ''
        // if (!plant.plantOwner.equals(plantOwner._id)) return res.redirect('/plants');
        console.log('deleting a plant')
        res.redirect('/plants');
   }
)};
    

function show(req, res){
    //find a plant by ID to see details
    Plant.findById(req.params.id, function(err, plantDoc) {
        console.log(plantDoc, 'plant doc show')
        const currentUser = req.user ? req.user._id : ''
        console.log(req.user, currentUser)
        res.render('plants/show', { plantName: 'Plant Details', plant: plantDoc, currentUser });
    });
}

function index(req, res){
    //find all plants list I added 
    Plant.find({}, function(err, plantsDoc){
        // console.log(err, 'why is this an error')
        console.log(plantsDoc, 'plants doc')
        let currentUser = req.user ? req.user._id : ''
        res.render('plants/index', { plants: plantsDoc, currentUser })
    })
};

function newPlant(req, res){
    console.log('add new plant')
    res.render('plants/new');
};


function create(req, res) {
    console.log(req.body, 'created new plant') //matches the plantSchema
    // if req.user else redirect to login page (homepage)
    req.body.plantOwner = req.user._id
    Plant.create(req.body, function(err, createdPlant){        
        if(err) return console.log(err, 'this is an error'), res.redirect('/plants/new')
        console.log(createdPlant, 'createdPlant');
        res.redirect('/plants');
    })
    //res.send('added new plant') //works when I click on Add New Plant button
};


