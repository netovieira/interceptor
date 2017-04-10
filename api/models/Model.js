'use strict';

var mongoose = require('mongoose');
var Extend = require('node.extend');

var ModelSchema = {
    inserted_at: {type: Date, default: null},
    updated_at: {type: Date, default: null},
    deleted_at: {type: Date, default: null}
};

var ModelOptions = {
    versionKey: false // You should be aware of the outcome after set to false
};

module.exports = function (Schema, Options) {
    return new mongoose.Schema(
        Extend(Schema, ModelSchema),
        Extend(Options, ModelOptions));
}