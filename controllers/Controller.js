'use strict';

var Schema = require('../helpers/schema');
var Model = require('../models/Model');

module.exports = {
    Create: function (Collection, data, callBack) {
        if (Schema.validate(Collection.Schema, data)) {

            Model.Connect(function (err, db) {

                db.collection(Collection.Name).insertOne(data, {}, function (err, doc) {

                    callBack(err, doc);
                    db.close();

                });
            });
        }
	},
    Update: function (Collection, data, id, callBack) {
        if (Schema.validate(Collection.Schema, data)) {

            Model.Connect(function (err, db) {

                db.collection(Collection.Name).findOne({_id: id}, function (err, obj) {

                    var updateData = Schema.fill(obj, data);

                    db.collection(Collection.Name).updateOne({_id: id}, [{$set: updateData}, function (err, newobj) {

                        callBack(err, newobj);
                        db.close();

                    }]);

                });
            });
        }
	},
    Remove: function (Collection, id, callBack) {

        Model.Connect(function (err, db) {

            db.collection(Collection.Name).removeOne({_id: id}, function (err) {

                callBack(err, doc);
                db.close();

            });

        });
	},
    GetOne: function (Collection, id, callBack) {

        Model.Connect(function (err, db) {

            db.collection(Collection.Name).findOne({_id: id}, function (err, doc) {

                callBack(err, doc);
                db.close();

            });

        });
	},
    Get: function (Collection, query, callBack) {

        console.log(Collection);
        Model.Connect(function (err, db) {

            db.collection(Collection.Name).find(query).toArray(function (err, doc) {

                callBack(err, doc);
                db.close();

            });

        });
	}
};

