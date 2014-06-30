// Metodos de la Coleccion
Meteor.methods({

	// Metodo para Contar la cantidad de servicios de un Numero Telefonico
	servicesCount : function (phone){
		var count = Services.find({customerPhone:phone}).count();
		console.log ('---> El Telefono : ', phone, ' ha Tenido  ', count , ' SERVICIOS <---');
		return count;
	},

	//Metodo para Buscar el Ultimo Servicio
	servicesLast : function (phone) {
		var lastServices = [];
		Services.find({customerPhone:phone},{sort:{_id: 1}, limit:2}).forEach(function (doc) {
			lastServices.push(doc)
		});
		console.log ('---> Los ULTIMOS 2 SERVICIOS OK <---');
		return lastServices;
	},

	// Metodo para insertar un Nuevo Servicio.
	servicesNew : function (data) {
		var newService = data;
		newService.timeLaunch = new Date().getTime();
		var insertNewService = Services.insert(newService);
		console.log('\n---> NUEVO DOCUMENTO CREADO EN SERVICES... ID = ', insertNewService, '<---\n');
		return insertNewService;
	},

	// METODO PARA ASIGNAR SERVICIO
	servicesAllocate : function (id, data) {
		var allocateService = data;
			allocateService.timeAllocate = new Date().getTime();
			console.log('-------------DATOS BTN ASIGNAR=',allocateService);
		Services.update({_id : id}, {$set:allocateService}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en SERVICES BTN ASIGNAR', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SERVICES BTN ASIGNAR ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SERVICES BTN ASIGNAR ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
		var customerData ={
			name : data.customerName,
			address : data.customerAddress,
			addressReference : data.customerAddressReference,
			comments : data.customerComments
		};

		Customers.update({_id:data.customerId},{$set: customerData}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en customers x BTN AS', err);
				return;
			}
			if (result === 1) {
				console.log ('---> CUSTOMERS UPDATE x BTN AS = ', result, ' ---> CAMBIO EXITOSO <---');
				return result;
			}
			else{
				console.log ('---> CUSTOMERS UPDATE x BTN AS= ', result, ' ---> UPssss, NO SE REALIZO EL CAMBIO <---');
				return;
			}
		});
	},

	// METODO PARA RE-ASIGNAR SERVICIO
	servicesReAllocate : function (id, data) {
		var allocateService = data;
			allocateService.timeReallocate = new Date().getTime();

		Services.update({_id : id}, {$set:allocateService}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en SERVICES BTN ASIGNAR', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SERVICES BTN ASIGNAR ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SERVICES BTN ASIGNAR ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	},

	// METODO AL FINALIZAR UN SERVICIO
	servicesPickup : function (id) {
		var pickupService = {};
		pickupService.timePickup = new Date().getTime();
		pickupService.status = 2;
		Services.update({_id : id}, {$set:pickupService}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en SERVICES BTN FINALIZAR', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SERVICES BTN FINALIZAR ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SERVICES BTN FINALIZAR ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	},

	// METODO CANCELAR SERVICIO
	servicesCancel : function (id, reason){
		var cancelService = {};
		cancelService.timeCancel = new Date().getTime();
		cancelService.cancelReason = reason;
		cancelService.status = 3;

		Services.update({_id : id}, {$set:cancelService}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en SERVICES BTN CANCELAR', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SERVICES BTN CANCELAR ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SERVICES BTN CANCELAR ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	},

	// METODO ACTUALIZAR DATOS DEL CLIENTE y DEL SERVICIO
	servicesUpdate : function (id, data){
		Services.update({_id : id}, {$set:data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en SERVICES x DATOS CLIENTE', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SERVICES UPDATE DATA CLIENTE ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SERVICES UPDATE DATA CLIENTE ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	}

});