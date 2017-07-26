'use strict';

var mongoose = require('mongoose');
var model = require('./Model');
var ObjectId = mongoose.Types.ObjectId;

var ProductSchema = model({
    name: String,
    user_id: mongoose.Schema.ObjectId,
    packages:[{
      _id: { type: mongoose.Schema.ObjectId, default: new ObjectId},
      unit: String,
      amount: Number
    }],
    brands:[{
      _id: { type: mongoose.Schema.ObjectId, default: new ObjectId},
      name: String
    }]
});

module.exports = mongoose.model('Product', ProductSchema);