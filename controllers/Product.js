'use strict';

var Controller = require('./Controller');
var Collection = require('../models/Product');


module.exports = {
    Create: function (data, callBack) {
        return Controller.Create(Collection, data, callBack);
    },
    Update: function (data, id, callBack) {
        return Controller.Update(Collection, data, id, callBack);
    },
    Remove: function (id, callBack) {
        return Controller.Remove(Collection, id, callBack);
    },
    Get: function (query, callBack) {
        return Controller.GetOne(Collection, query, callBack);
    },
    GetOne: function (id, callBack) {
        return Controller.GetOne(Collection, id, callBack);
    },
    GetAll: function (callBack) {
        return Controller.Get(Collection, {}, callBack);
    }
};