const mongoose = require('mongoose')

const usermodel = mongoose.Schema({
    username:String,
    email:String,
    password:String
});
module.exports = mongoose.model('User',usermodel);
