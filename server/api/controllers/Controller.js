'use strict';

var Schema = require('../helpers/schema');
var Extend = require('node.extend');


module.exports = function (Model) {
    return {
        Create: function (data, callBack) {
            var newModel = new Model(data);
            newModel.inserted_at = Date.now();

            newModel.save(function (err) {
                if (err)
                    return callBack(err);

                return callBack(null, newModel);
            });
        },
        Update: function (data, id, callBack) {
            Model.findById(id, function (err, Record) {
                if (err) return callBack(err, null);
                Record = Schema.fill(Record, data);
                Record.updated_at = Date.now();

                Record.save(function (err) {
                    if (err)
                        return callBack(err);

                    return callBack(null, Record);
                })
            })
        },
        Remove: function (id, callBack, force) {
            Model.findById(id, function (err, Record) {
                if (err) return callBack(err, null);
                if (force || Record.deleted_at !== null) {
                    Record.remove(function (err) {
                        if (err)
                            return callBack(err);

                        return callBack(null, Record);
                    })
                } else {
                    Record.deleted_at = Date.now();

                    Record.save(function (err) {
                        if (err)
                            return callBack(err);

                        return callBack(null, Record);
                    })
                }
            })
        },
        GetOne: function (id, callBack) {
            Model.findById(id, function (err, Record) {
                if (err)
                    return callBack(err);

                return callBack(null, Record);
            })
        },
        Get: function (query, callBack) {
            query = Extend({deleted_at: null}, query);
            Model.find(query, function (err, Records) {
                if (err)
                    return callBack(err);

                return callBack(null, Records);
            })
        },
        GetRemoved: function (query, callBack) {
            query = Extend({deleted_at: {$ne: null}}, query);
            console.log(query);
            Model.find(query, function (err, Records) {
                if (err)
                    return callBack(err);

                return callBack(null, Records);
            })
        }
    };
};