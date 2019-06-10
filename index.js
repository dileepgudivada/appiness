const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

var paytmService = require('./controllers/paytmService.js');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' } ));



app.listen(3000, ()=> console.log('server started at port : 3000'));

app.use('/paytm', paytmService);