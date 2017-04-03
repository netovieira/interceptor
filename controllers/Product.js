var Controller = require('./controllers/Controller');
var Collection = require('./models/Product');

module.exports = {
	Create: function(data){
		return Controller.Create(Collection, data);
	},
	Update: function(data, id){
		return Controller.Update(Collection, data, id);
	},
	Remove: function(id){ 
		return Controller.Remove(Collection, id);
	},
	GetOne: function(id){ 
		return Controller.GetOne(Collection, id);
	},
	GetAll: function(){ 
		return Controller.Get(Collection, {}); 
	}
}