const mongoose = require('mongoose');

var Paytm = mongoose.model('Paytm', {
    name: {type: String},
    phone: {type: Number},
    password: {type: String},
    balance: {type: Number}
})

var Sendmoney = mongoose.model('Sendmoney', {
    phone: {type: Number},
    balance: {type: Number}

})

var Transaction = mongoose.model('Transaction', {
    balance: {type: Number}
})

var Admin = mongoose.model('Admin', {
    name: {type: String},
    phone: {type: Number},
    balance: {type: Number}
})

module.exports = {
    Paytm: Paytm,
    Sendmoney: Sendmoney,
    Transaction: Transaction,
    Admin: Admin
};