var Var = require('./helpers/variables');

module.exports = {
	validate: function(Schema, data)
	{
		for( prop in data){
			if ( !Schema.hasOwnProperty(prop) ) {
				return false;
			}
			else if ( Var.IsNull(data[prop]) && Schema[prop].required ){
				return false;
			}	
			else if ( !Var.is( Schema[prop].type, data[prop] && !Var.IsNull(data[prop]) ) ){
				return false;
			}
		}
		return true;
	},
	fill: function(obj, data){
		var objReturn = {};
		for( prop in data){
			if ( obj[prop] != data[prop])
				objReturn[prop] = data[prop];
		}
		return objReturn;
	}
} 

