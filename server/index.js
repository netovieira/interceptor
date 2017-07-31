'use strict';


var port = 3000;

var express = require('express');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var app = express();
mongoose.connect(require('./config/database').url);

app.use(cookieParser()); // read cookies (needed for auth)
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'takeTheMachineGunAndTraTraTra', // session secret
    name: 'interceptor_session',
    resave: true,
    saveUninitialized: true
}));

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//call routes

require('./api/routes/routes')(app);
require('./api/routes/Passport')(app, passport);

app.listen(port, function () {
    console.log('');
    console.log('Servidor rodando!');
});