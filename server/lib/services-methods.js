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
	}
});