'use strict';


var express = require('express');
console.log('Express loaded');

var bodyParser = require('body-parser');
console.log('bodyParser loaded');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/routes')(app);

app.listen(3000, function () {
    console.log('');
    console.log('');
    console.log('Servidor rodando!');
});