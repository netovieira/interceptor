module.exports = {
	isString: function(variable){
		return ( typeof variable === 'string' );
	},
	isNumber: function(variable){
		return ( typeof variable === 'number' );
	},
	isBoolean: function(variable){
		return ( typeof variable === 'boolean' );
	},
	getType: function(str){
		return typeof str;
	},
	isNull: function(str){
		return ( str === '' or typeof str === 'undefined' );
	}
	is: function(type, variable){
		return ( typeof variable === type.toLowerCase());
	}
} 