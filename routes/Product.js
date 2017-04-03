module.exports = function(app, Router){
	var ProductController = require('./controllers/Product');

	Router.route('/products')

		.get(function(req, res)){
			var result = ProductController.GetAll();
			if ( !result.error ){
				res.json(result.data);
			}
		};

	Router.route('/product/:id')

		.get(function(req, res)){
			var result = ProductController.GetOne(req.body.id);
			if ( !result.error ){
				res.json(result.data);
			}
		};

}