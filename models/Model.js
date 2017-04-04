var MongoClient = require('mongodb').MongoClient;
console.log('Mongo loaded');

module.exports = {
    Connect: function (callBack) {
        return MongoClient.connect('mongodb://shuser:q1w2e3@54.207.109.2:27017/shoppinglist', callBack);
    }
};