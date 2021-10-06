// Plant is our Model object that can talk to the db
const Plant = require('../models/plant');



module.exports = {
    new: newPlant,
    create, 
    index, 
    show, 
    delete: deletePlant,

};

function deletePlant(req, res){
    // if req.user equals plant findbyId if it matches, then redirect, and i need an edit
    Plant.deleteOne({_id: req.params.id}, function(err, deleted) {
    console.log('deleting a plant')
    res.redirect('/plants');
   
}
)};
    

function show(req, res){
    //find a plant by ID to see details
    Plant.findById(req.params.id, function(err, plantDoc) {
        console.log(plantDoc, 'plant doc show')
        res.render('plants/show', { plantName: 'Plant Details', plant: plantDoc });
    });
}

function index(req, res){
    //find all plants list I added 
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

// function create(req, res) {
// 	// console.log(req.body, 'created new plant')
//     req.body.user = req.user._id
//     const newPlant = new Plant(req.body)
//     newPlant.save(function (err) {
// // console.log(createdPlant, 'createdPlant');
//         res.redirect('/plants');
//     })
// };
function create(req, res) {
    console.log(req.body, 'created new plant') //matches the plantSchema
    // if req.user else redirect to login page (homepage)
    Plant.create(req.body, function(err, createdPlant){        
        if(err) return console.log(err, 'this is an error'), res.redirect('/plants/new')
        console.log(createdPlant, 'createdPlant');
        res.redirect('/plants');
    })
    //res.send('added new plant') //works when I click on Add New Plant button
};


