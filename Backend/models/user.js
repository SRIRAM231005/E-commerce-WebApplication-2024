const mongoose = require("mongoose");

  
const userSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required: true
    },
    Password :{
        type: String,
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
});  

//Model
const User = mongoose.model('user', userSchema);

module.exports = User