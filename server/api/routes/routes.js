'use strict';

module.exports = function (app) {

    var Routes = {};

    var ProductController = require('../controllers/Product');
    Routes.Product = require('../routes/Router')(ProductController, 'product');


    for (var key in Routes)
        app.use('/api', Routes[key]);

};