'use strinct';

var rm = require('../helpers/resultManager');
var Var = require('../helpers/variables');

var express = require('express');
var Router = express.Router();

module.exports = function (Controller, RouteName) {

    Router.route('/' + Var.SetPlural(RouteName))
    //Return all Products
        .get(function (req, res) {
            Controller.GetAll(function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Create a new Product
        .post(function (req, res) {
            Controller.Create(req.body, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        });

    Router.route('/' + RouteName + '/:id')
    //Return a Product
        .get(function (req, res) {
            Controller.GetOne(req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Update a Product
        .put(function (req, res) {
            Controller.Update(req.body, req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        })
        //Remove a Product
        .delete(function (req, res) {
            Controller.Remove(req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            });
        });

    Router.route('/' + RouteName + '/:id/force')
        .delete(function (req, res) {
            Controller.Remove(req.params.id, function (err, data) {
                res.json(rm.Reply(err, data));
            }, true);
        });

    Router.route('/' + Var.SetPlural(RouteName) + '/removed')
        .get(function (req, res) {
            Controller.GetRemoved({}, function (err, data) {
                res.json(rm.Reply(err, data));
            }, true);
        });

    return Router;
};