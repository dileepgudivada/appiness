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
        balance: req.body.balance
    });
    var obj = {
        name:user.name,
        phone: user.phone,
        password: user.password,
        balance: user.balance
    }
})

router.post('/:sendmoney', (req, res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No money is added to the user by another user');

    var money = new money({
        phone: user.phone,
        balance: user.balance
    });
    var obj = {
        phone: user.phone,
        balance: user.balance
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
        balance: user.balance
    });

    var obj = {
        balance: user.balance
    }
})

router.get('/:admin', (req, res)=> {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send('No current balance records are found');

    Paytm.findById(req.params.id, (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in retriving Paytm Admin');
        }
    })
   
})

module.exports = router;