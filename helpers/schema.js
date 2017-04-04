'use strict';

var Var = require('./variables');

module.exports = {
	validate: function(Schema, data)
	{
        for (var prop in data) {
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
        for (var prop in data) {
            if (obj[prop] !== data[prop])
				objReturn[prop] = data[prop];
		}
		return objReturn;
	}
};

