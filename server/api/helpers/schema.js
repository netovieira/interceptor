'use strict';

var Var = require('./variables');

module.exports = {
    validate: function (Schema, data) {
        for (var prop in data) {
            if (!Schema.hasOwnProperty(prop)) {
                return false;
            }
            else if (Var.isNull(data[prop]) && Schema[prop].required) {
                return false;
            }
            else if (!Var.is(Schema[prop].type, data[prop]) && !Var.isNull(data[prop])) {
                return false;
            }
        }
        return true;
    },
    fill: function (obj, data) {
        for (var prop in data) {
            if (obj[prop] !== data[prop])
                obj[prop] = data[prop];
        }
        return obj;
    }
};

