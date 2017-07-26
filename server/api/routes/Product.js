'use strict';

var ProductController = require('../controllers/Product');

module.exports = function (Router, Controller, RouteName) {

    Router.route('/' + Var.SetPlural(RouteName))
    //Return all Products
        .get(function (req, res) {
            ProductController.GetAll(function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Create a new Product
        .post(function (req, res) {
            ProductController.Create(req.body, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        });

    Router.route('/' + RouteName + '/:id')
    //Return a Product
        .get(function (req, res) {
            ProductController.GetOne(req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Update a Product
        .put(function (req, res) {
            ProductController.Update(req.body, req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Remove a Product
        .delete(function (req, res) {
            ProductController.Remove(req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        });

};