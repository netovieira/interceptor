'use strict';

var mongoose = require('mongoose');
var model = require('./Model');
var ObjectId = mongoose.Schema.Types.ObjectId;

var ProductSchema = model({
    name: String,
    user_id: ObjectId,
    packages:[{
      _id: { type: ObjectId, default: new ObjectId},
      unit: String,
      amount: Number
    }],
    brands:[{
      _id: { type: ObjectId, default: new ObjectId},
      name: String
    }]
});

module.exports = mongoose.model('Product', ProductSchema);