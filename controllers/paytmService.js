const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;

var { Paytm } = require('../models/paytm');

//localhost:3000/paytmUser/
router.get('/', (req, res) => {
    Paytm.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retriving PaytmUser');
        }
    });
});

router.get('/:login', (req, res) => {
    if(!objectId.isValid(req.params.login))
    return res.status(400).send('No records with given login');

    Paytm.findById(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in retriving PaytmUserLogin');
        }
    })
});

router.put('/:login', (req, res)=>{
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No records with given login');

    var user = new User({
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password,
        amount: req.body.amount
    });
    var obj = {
        name:user.name,
        phone: user.phone,
        password: user.password,
        amount: user.amount
    }
})

router.post('/:sendmoney', (req, res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No money is added to the user by another user');

    var money = new money({
        senderPhone: user.senderPhone,
        amount: user.amount
    });
    var obj = {
        phone: user.phone,
        amount: user.amount
    }

    paytm.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in Paytm User');
        }
    });
})

router.put('/:transaction', (req, res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No transaction records are found');

    var transaction = new transaction({
        senderPhone: user.senderPhone,
        amount: user.amount,
        receiverPhone: user.receiverPhone
    });

    var obj = {
        senderPhone: user.senderPhone,
        amount: user.amount,
        receiverPhone: user.receiverPhone
    }
})

router.get('/:admin', (req, res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No current amount records are found');

    Paytm.findById(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in retriving Paytm Admin');
        }
    })
   
})

module.exports = router;