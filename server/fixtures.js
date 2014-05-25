
// Inicializamos almenos Un Usuario
if (Meteor.users.find().count() === 0) {
	Accounts.createUser({
		username: 'johan',
		password: 'johan123',
		profile: {
			name: 'Johan Ramirez',
			rol: 'agent',
			extension: '101'
		}
	});

	Accounts.createUser({
		username: 'johan1',
		password: 'johan123',
		profile: {
			name: 'Johan Ramirez',
			rol: 'admin'
		}
	});
}


/*

// Formato de Inicializacion de la Coleccion
if(Customers.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento
	var phone = 6049899;		// Telefono del Cliente
	var cod = '99';		// Codigo del Cliente, Ultimos 2 Numeros del Telefono
	var names = ['Johan', 'Nicolas'];		// Array con los Nombres de los que piden el Servicio
	var address = "CRA 21 37 28";		// Direccion en ese Formato
	var addressReference = 'el Tablazo';		// Referencia o Barrio de la Direccion
	var comments = "Taxi de don Pacho";		// Comentarios o notas de la direccion
	var createdAt = new Date().getTime();

	var newCustomer = {
		_id : id,
		address: address,
		comments : comments,
		addressReference : addressReference,
		cod : cod,
		createdAt : createdAt,
		names : names,
		phone : phone
	};

	var insertCustomer = Customers.insert(newCustomer);
		console.log('---> customers --PRIMER USUARIO REGISTRADO id = ', insertCall, '<---\n');
}

//----------------------------------------------------------------------------------------------


// Formato de Inicializacion de la Coleccion
if(Taxis.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento
	var movil = '123';		// Identificacion del Movil o Taxi
	var placa = 'TTT999';		// Placa del Taxi
	var marca = 'RENOL';		// Marca del Taxi
	var features = 'Tiene Maletas';		// Caracteristicas del Taxi
	var drivers = ["Pacho", "NANO"];		// Conductores del taxi
	var owner = "JAIME";		// propietario
	var status = 0;		// Status del Taxi [ 0 = Habilitado, Sansionado = 1 ]
	var contact = "celular o Direccion del Taxista";
	var createdAt = new Date().getTime();

	var newTaxi = {
		_id : id,
		createdAt: createdAt,
		contact : contact,
		drivers : drivers,
		features : features,
		marca : marca,
		movil : movil,
		owner : owner,
		placa : placa,
		status : status
	};

	var insertTaxi = Taxis.insert(newTaxi);
		console.log('---> taxis --PRIMER TAXI REGISTRADO id = ', insertTaxi, '<---\n');
}

//----------------------------------------------------------------------------------------------

// Formato de Inicializacion de la Coleccion
if(PanelCalls.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento

	var siptaxiCallId = new Meteor.Collection.ObjectID();		// Id del la Llamada siptaxi
	var siptaxiCallasteriskUniqueId = new Meteor.Collection.ObjectID();		// Id del la Llamada asterisk
	var siptaxiCallPhone = '6049999';		// numero Telefono
	var siptaxiCallCount = '10';		// Numero de Veces que ha llamado el Usuario
	var siptaxiCallLast = moment().format("dddd, MMMM DD YYYY, HH:mm:ss");		// Fecha de la Ultima Llamada

	var isNewCustomer = false;		// Es una cliente Nuevo???

	var customerId = new Meteor.Collection.ObjectID();		// Id del usuario si existe
	var customerNames = ['Johan', 'Nicolas'];		// Array con los Nombres de los que piden el Servicio
	var customerAddress = "CRA 21 37 28";		// Direccion en ese Formato
	var customerAddressReference = 'el Tablazo';		// Referencia o Barrio de la Direccion
	var customerAddressComments = "Taxi de don Pacho";		// Comentarios o notas de la direccion

	var serviceCount = '10';		// Numero de servicios  que ha tenido el usuario
	var serviceLast = moment().format("dddd, MMMM DD YYYY, HH:mm:ss");		// Fecha de la Ultima Llamada;
	var servicesLasts = {};				// Objeto con los ultimos 3 Servicios

	var status = 0;		//

	var newPanelCall = {
		_id : id,
		siptaxiCallId : siptaxiCallId,
		siptaxiCallasteriskUniqueId : siptaxiCallasteriskUniqueId,
		siptaxiCallPhone : siptaxiCallPhone,
		siptaxiCallCount : siptaxiCallCount,
		siptaxiCallLast : siptaxiCallLast,
		isNewCustomer : isNewCustomer,
		customerId : customerId,
		customerNames : customerNames,
		customerAddress : customerAddress,
		customerAddressReference : customerAddressReference,
		customerAddressComments : customerAddressComments,
		serviceCount : serviceCount,
		serviceLast : serviceLast,
		servicesLasts : servicesLasts,
		status : status
	};

	var insertPanelCall = PanelCalls.insert(newPanelCall);
	console.log('---> panelCalls --PRIMERA LLAMADA REGISTRADA id = ', insertPanelCall, '<---\n');
}

//----------------------------------------------------------------------------------------------

// Formato de Inicializacion de la Coleccion
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

//----------------------------------------------------------------------------------------------



// Formato de Inicializacion de la Coleccion
if(SiptaxiCalls.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();
	var timestampIncoming = new Date().getTime();
	var timeIncoming = moment(timestampIncoming).format("dddd, MMMM DD YYYY, HH:mm:ss");
	var asteriskChannel = 'SIP/UNE-2486385-00000000';
	var phone = '6049999';
	var asteriskUniqueId = '1400126252.144';
	var timestampHangup = new Date().getTime();
	var timeHangup = moment(timestampHangup).format("dddd, MMMM DD YYYY, HH:mm:ss");
	var status = '0';
	var agentId = new Meteor.Collection.ObjectID();
	var agentName = 'Johan Ramirez';

	var newCall = {
		_id : id,
		agentId : agentId,
		agentName : agentName,
		asteriskChannel : asteriskChannel,
		asteriskUniqueId : asteriskUniqueId,
		phone : phone,
		status : status,
		times : {
			timeHangup : timeHangup,
			timestampHangup : timestampHangup,
			timeIncoming : timeIncoming,
			timestampIncoming : timestampIncoming
		}
	};

	var insertCall = SiptaxiCalls.insert(newCall);
		console.log('---> siptaxicalls --PRIMERA LLAMADA REGISTRADA id = ', insertCall, '<---\n');
}
*/


//---------------------------------------------------------------------------------------------------
console.log ('\n---> Cantidad de Usuarios Creados =', Meteor.users.find().count());
console.log ('---> Numero de Documentos en la Coleccion asteriskCalls =', AsteriskCalls.find().count());
console.log ('---> Numero de Documentos en la Coleccion customers =', Customers.find().count());
console.log ('---> Numero de Documentos en la Coleccion customersNames =', CustomersNames.find().count());
console.log ('---> Numero de Documentos en la Coleccion addressReference =', AddressReferences.find().count());
console.log ('---> Numero de Documentos en la Coleccion taxis =', Taxis.find().count());
console.log ('---> Numero de Documentos en la Coleccion services =', Services.find().count());
console.log ('---> Numero de Documentos en la Coleccion panelCalls =', PanelCalls.find().count());
console.log ('---> Numero de Documentos en la Coleccion siptaxiCalls =', SiptaxiCalls.find().count(),'\n');