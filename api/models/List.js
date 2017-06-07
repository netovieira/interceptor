'use strict';

var mongoose = require('mongoose');
var model = require('./Model');
var ObjectId = mongoose.Types.ObjectId;

var ListSchema = model({
    name: String,
    user_id: mongoose.Schema.ObjectId,
    downloads: { type: Number, default: 0 },
    recipe: { type: Boolean, default: false },
    items:[{
        _id: { type: mongoose.Schema.ObjectId, default: new ObjectId},
        name: String,
        amount: { type: Number, default: 0 },
        brand: String,
        package: {
            amount: Number,
            unit: String
        }
    }],
    address:{
        _id: { type: mongoose.Schema.ObjectId, default: new ObjectId},
        street: String,
        number: Number,
        complement: String,
        district: String,
        city: String,
        country: String,
        coordinates:{
            latitude: Number,
            longitude: Number
        }
    },
    executor:{
        _id: mongoose.Schema.ObjectId,
        name: String
    },
    when:{
        date: Date,
        recursive:Boolean
    }
});

var User = require('../api/models/User');

ListSchema.post('save', function (doc, next) {
    User = new User();

});

module.exports = mongoose.model('List', ListSchema);