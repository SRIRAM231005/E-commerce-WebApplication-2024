const mongoose = require("mongoose");

async function MonguConnect(url){
   mongoose.connect(url);
}  

module.exports = {
    MonguConnect,
}