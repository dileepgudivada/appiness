const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PaytmDB', (err)=>{
    if(!err){
        console.log('mongodb connection suceeded..');
    }else{
        console.log('Error in db connection..');
    }
});

module.exports = mongoose;
