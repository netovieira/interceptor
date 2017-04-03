module.exports = {
	Model: function(db){
		return db.collection('products');
	},
	Schema: {
		name : { type: 'string', required: true }
	}
};