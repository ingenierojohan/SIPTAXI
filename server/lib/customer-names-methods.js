// Metodos de la Coleccion
Meteor.methods({
	customersNamesInsert:function(data){
		var name = {name:data}
		CustomersNames.insert(name);
	}
});