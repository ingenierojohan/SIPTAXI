// Coleccion de los Clientes
Customers = new Meteor.Collection('customers');

/*// Formato de Inicializacion de la Coleccion
if(Customers.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento
	var phone = '6049999';		// Telefono del Cliente
	var cod = '99';		// Codigo del Cliente, Ultimos 2 Numeros del Telefono
	var names = ['Johan', 'Nicolas'];		// Array con los Nombres de los que piden el Servicio
	var address = "CRA 21 37 28";		// Direccion en ese Formato
	var addressReference = 'el Tablazo';		// Referencia o Barrio de la Direccion
	var addressComments = "Taxi de don Pacho";		// Comentarios o notas de la direccion
	var createdAt = new Date().getTime();

	var newCustomer = {
		_id : id,
		address: address,
		addressComments : addressComments,
		addressReference : addressReference,
		cod : cod,
		createdAt : createdAt,
		names : names,
		phone : phone
	};

	var insertCustomer = Customers.insert(newCustomer);
		console.log('---> customers --PRIMER USUARIO REGISTRADO id = ', insertCall, '<---\n');
}

//----------------------------------------------------------------------------------------------*/

// Metodos de la Coleccion

Meteor.methods({
	customersFindPhone : function (phone) {
		console.log ('---> BUSCANDO EL TELEFONO : ', phone, ' en customers <---');
	/*	Customers.find({phone : phone}).forEach(function (doc) {
			//console.log ('---> CUSTOMER ======', doc);
			customers.push(doc);
		});*/
		var customer = Customers.findOne({ phone : phone }, { sort : {createdAt : -1}});
		if (customer){
				console.log ('---> TELEFONO ENCONTRADO, Enviando Datos del Cliente OK <---');
				return customer;
		}
		else{
			console.log ('---> TELEFONO NO EXISTE, es un Cliente Nuevo =', customer, ' <---');
			return null;
		}	
	}
});