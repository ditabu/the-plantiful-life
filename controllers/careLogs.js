const Plant = require('../models/plant')

module.exports = {
    create,
};

function create(req, res){
    console.log(req.body, 'does this show up')
    res.send('carlog page created')
    // CareLog.create(req.body, function(err, createdCareLog){
    //     if(err) return res.direct('/plants/:id');
    //     console.log(createdCareLog, 'createdCarelog error');
    //     res.redirect('/plants/:id/careLogs');
    // })
};
