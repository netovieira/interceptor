'use strict';


var express = require('express');
console.log('Express loaded');

var bodyParser = require('body-parser');
console.log('bodyParser loaded');

var MongoClient = require('mongodb').MongoClient;
console.log('Mongo loaded');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db;

MongoClient.connect('mongodb://shuser:q1w2e3@54.207.109.2:27017/shoppinglist', function(err, database){
	if (err) {
        return console.log(err);
	}
	
	db = database;	
	app.listen(3000, function(){
		console.log('');
		console.log('');
		console.log('Servidor rodando!');
	});
});

app.use('/', function(req,res){
	var products = db.collection('products');

	products.find().toArray(function (err, docs) {
		if (err){
			console.log(err);
			res.json({error:err});
		}else{
			console.log(docs);
			res.json(docs);
		}
	});
});