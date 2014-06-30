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
	},

	// Actualizar Datos Usuario al LANZAR SERVICIO.
	customerUpdate : function (id, data) {
		console.log('\n\n---> ACTUALIZANDO UN CUSTOMER x BOTON LANZAR <---');
		Customers.update({_id:id },{$set: data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en customers', err);
				return;
			}
			if (result === 1) {
				console.log ('---> CUSTOMERS UPDATE = ', result, ' ---> CAMBIO EXITOSO <---');
				return result;
			}
			else{
				console.log ('---> CUSTOMERS UPDATE = ', result, ' ---> UPssss, NO SE REALIZO EL CAMBIO <---');
				return;
			}
		});
	},

	// Actualizar Datos Usuario buscando Su Telefono.
	customerUpdateByPhone : function (phone, data) {
		console.log('\n\n---> ACTUALIZANDO UN CUSTOMER x SU TELEFONO <---');
		Customers.update({phone:phone },{$set: data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en customers', err);
				return;
			}
			if (result === 1) {
				console.log ('---> CUSTOMERS UPDATE = ', result, ' ---> CAMBIO EXITOSO <---');
				return result;
			}
			else{
				console.log ('---> CUSTOMERS UPDATE = ', result, ' ---> UPssss, NO SE REALIZO EL CAMBIO <---');
				return;
			}
		});
	},

	//Crear Nuevo Documentos del Usuario
	customerInsert : function (data) {
		var now = new Date().getTime();
		var newCustomer = {
			address : data.address,
			addressReference : data.addressReference,
			name : data.name,
			comments : data.comments,
			phone : data.phone,
			cod : data.cod,
			createdAt : now
		};
		var insertCustomer = Customers.insert(newCustomer);
		
		console.log('\n---> NUEVO DOCUMENTO EN CUSTOMERS ... ID = ', insertCustomer, '<---\n');
		return insertCustomer;
	}
});