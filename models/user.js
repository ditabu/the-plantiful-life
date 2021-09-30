const mongoose = require('mongoose');

// Create your User Model

const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    avatar: String, 
    googleId: String
});

module.exports = mongoose.model('User', userSchema);