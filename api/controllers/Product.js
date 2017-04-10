'use strict';

var Collection = require('../models/Product');
var Controller = require('./Controller')(Collection);
var Extend = require('node.extend');


module.exports = Extend(Controller,
    {
        GetAll: function (callBack) {
            return Controller.Get({}, callBack);
        }
    });