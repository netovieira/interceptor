var Schema = require('./helpers/schema');

module.exports = {
	Create: function(Collection, data){
		if ( Schema.validate(Collection.Schema, data))
			Collection.Model.insert(data, function(err, doc){
					return { error:err, data:doc };
			});
	},
	Update: function(Collection, data, id){
		if ( Schema.validate(Collection.Schema, data))
			Collection.Model.findOne({_id: id}, function(err, obj){
				var updateData = Schema.fill(obj, data);
				Collection.Model.update({_id: id}, [{$set: updateData} function(err, newobj)){
					return { error:err, data:newobj };
				}
			}]);
	},
	Remove: function(Collection, id){
		Collection.Model.remove({_id : id}, function(err){
					return { removed:!err, error:err, data:null };
		});
	},
	GetOne: function(Collection, id){
		Collection.Model.findOne({_id : id}, function(err,doc){
					return { error:err, data:doc };
		});
	},
	Get: function(Collection, query){
		Collection.Model.find(query, function(err,doc){
					return { error:err, data:doc };
		});
	}
}

