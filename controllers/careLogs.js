const Plant = require('../models/plant')

module.exports = {
    create,
};

function create(req, res){
    console.log(req.body, 'does this show up')

    //find the plant doc we want to add care log to
    //req.body is the carelog that we need to add to the plant doc
    //req.params.id - routes/carelogs id of the plant to add carelog to
    //1. find the plant doc, 2. add carelog to plant doc, 3. respond to the client
    Plant.findById(req.params.id, function(err, plantDoc){
        console.log(plantDoc, 'plant doc id with carelogs')
        plantDoc.careLog.push(req.body); //careLogs is req.body and embedded in carelogs doc array
        //when we MutationEvent, tell db by saving
        plantDoc.save(function(err){
            console.log(err, 'why are you not working')
            res.redirect(`/plants/${req.params.id}`);
        });
    });
    // res.send('carlog page created')
    // CareLog.create(req.body, function(err, createdCareLog){
    //     if(err) return res.direct('/plants/:id');
    //     console.log(createdCareLog, 'createdCarelog error');
    //     res.redirect('/plants/:id/careLogs');
    // })
};
