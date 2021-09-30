const mongoose = require('mongoose');

// Create your User Model

const plantistaSchema = new mongoose.Schema({
    name: String, 
    email: String,
    avatar: String, 
    favoritePlant: String,
    googleId: String
});

module.exports = mongoose.model('Plantista', plantistaSchema);