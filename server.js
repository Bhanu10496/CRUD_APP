const express = require('express');
const bp = require('body-parser');
const app = express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/crud');

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use('/', require('./api'));

app.listen(7777, function () {
     console.log('Server started on http://localhost:7777')
});

