// Coleccion de los Clientes
Services = new Meteor.Collection('services');

/*// Formato de Inicializacion de la Coleccion
if(Services.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento

	var customerId = new Meteor.Collection.ObjectID();		// Id del Cliente
	var customerPhone = '6049999';		// Telefono del cliete
	var customerAddress = "CRA 21 37 28";		// Direccion del Cliente
	var customerAddressReferece = 'el Tablazo';		// Referencia o Barrio de la Direccion del Cliente
	var customerAddressComments = "Taxi de don Pacho";		// Comentarios o notas de la direccion del Cliente
	var customerNames = ['Johan', 'Nicolas'];		// Array con los Nombres de los que piden el Servicio
	var customercod = '99';		// Codigo del Cliente, Ultimos 2 Numeros del Telefono

	var siptaxiCallId = new Meteor.Collection.ObjectID();		// Id del la Llamada siptaxi
	var siptaxiCallasteriskUniqueId = new Meteor.Collection.ObjectID();		// Id del la Llamada asterisk

	var taxiId = new Meteor.Collection.ObjectID();		// Id del taxi
	var taxiMovil = '123';		// Identificacion del Movil o Taxi
	var taxiPlaca = 'TTT999';		// Placa del Taxi

	var agentId = new Meteor.Collection.ObjectID();
	var agentName = 'Johan Ramirez';

	var timeLaunch = new Date().getTime();		// Hora en que Fue Lanzado el Servicio
	var timeAllocate = new Date().getTime();		// Hora en que Fue Asignado el Servicio
	var timePickUp = new Date().getTime();		// Hora en que Fue recogido el Servicio
	var timeCancel = new Date().getTime();		// Hora en que Fue Cancelado el Servicio
	var	timeReallocate = new Date().getTime();		// Hora en que Fue ReAsignado el Servicio

	var comments = 'Comentarios del Servicio' 	// Observaciones del Servicio
	var status = 0	// 0 = servicio Lanzado
									// 1 = servicio Finalizado
									// 2 = servicio Cancelado


	var newService = {
		_id : id,
		customerId: customerId,
		customerPhone : customerPhone,
		customerAddress : customerAddress,
		customerAddressReferece : customerAddressReferece,
		customerAddressComments : customerAddressComments,
		customerNames : customerNames,
		customercod : customercod,
		siptaxiCallId : siptaxiCallId,
		siptaxiCallasteriskUniqueId : siptaxiCallasteriskUniqueId,
		taxiId : taxiId,
		taxiMovil : taxiMovil,
		taxiPlaca : taxiPlaca,
		agentId : agentId,
		agentName : agentName,
		timeLaunch : timeLaunch,
		timeAllocate : timeAllocate,
		timePickUp : timePickUp,
		timeCancel : timeCancel,
		timeReallocate : timeReallocate,
		comments : comments,
		status : status
	};

	var insertService = Services.insert(newService);
		console.log('---> services --PRIMER SERVICIO REGISTRADO id = ', insertService, '<---\n');
}

//----------------------------------------------------------------------------------------------*/

// MEtodos de la Coleccion
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
	}
});