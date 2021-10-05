const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careLogSchema = new mongoose.Schema({
  plantOwner: { type: Schema.Types.ObjectId, ref: 'Plantista' }, 
  watered: Date,
  groomed: Date,
});
  
  // in a models/plant.js file 
  const plantSchema = new mongoose.Schema({   
    plantOwner: { type: Schema.Types.ObjectId, ref: 'Plantista' },   
    plantName: String,
    plantSpecies: String,
    light: String,
    water: String,
    groom: String,
    climate: String,
    date: Date,
    careLog: [careLogSchema],  
});
   

module.exports = mongoose.model('Plant', plantSchema);