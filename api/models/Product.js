'use strict';

var mongoose = require('mongoose');
var model = require('./Model');


var ProductSchema = model({
    name: String
});

module.exports = mongoose.model('Product', ProductSchema);