const mongoose = require("mongoose");

  
const userSchema = new mongoose.Schema({
    cEmail :{
        type: String
    },
    CartOrders :{
        type: Array
    },
    OrderPrice :{
        type: String
    },
},{ timestamps: true});  

//Model
const Order = mongoose.model('order', userSchema);

module.exports = Order