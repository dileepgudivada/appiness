const mongoose = require('mongoose');

var Paytm = mongoose.model('Paytm', {
    user: {type: String},
    name: {type: String},
    phone: {type: Number},
    password: {type: String},
    amount: {type: Number}
})

var Transaction = mongoose.model('Transaction', {
    senderPhone: {type: Number}, 
    amount: {type: Number},
    receiverPhone: {type: Number}
})

module.exports = {
    Paytm: Paytm,
    Transaction: Transaction
};