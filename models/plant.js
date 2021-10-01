const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careLogSchema = new mongoose.Schema({
  watered: Date,
  groomed: Date,
  timestamps: true
});
  
  // in a models/plant.js file 
  const plantSchema = new mongoose.Schema({   
    plantOwner: { type: Schema.Types.ObjectId, ref: 'Plantista' },   
    plantName: String,
    plantSpecies: String,
    lighting: String,
    watering: String,
    grooimg: String,
    climate: String,
    careLog: [careLogSchema],
    timestamps: true   
});
   

module.exports = mongoose.model('Plant', plantSchema);