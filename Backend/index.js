const express = require("express");
const app = express();
const {MonguConnect} = require('./connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const userrouter = require('./routes/user');

MonguConnect('mongodb://127.0.0.1:27017/log').then(()=> console.log("Mongoose Connected"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use(express.urlencoded({ extended: false }));
app.use('/user' , userrouter);

app.listen(8002,  ()=>{
    console.log('server started');
});