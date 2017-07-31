'use strict';

module.exports = function (app) {

    var Routes = {};

    var ProductController = require('../controllers/Product');
    Routes.Product = require('./Router')(ProductController, 'product');

    for (var key in Routes)
        app.use('/', Routes[key]);

};