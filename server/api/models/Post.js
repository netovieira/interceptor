'use strict';

var mongoose = require('mongoose');
var model = require('./Model');
var ObjectId = mongoose.Schema.Types.ObjectId;

var PostSchema = model({
    subject: String,
    text: String,
    user:{
        _id: ObjectId,
        name: String,
        image: String
    },
    comments:[{
        text: String,
        user:{
            _id: ObjectId,
            name: String,
            image: String
        }
    }],
    likes: Number,
    unlike: Number
});

var User = require('../api/models/User');

ListSchema.post('save', function (doc, next) {
    User = new User();

});

module.exports = mongoose.model('Post', PostSchema);