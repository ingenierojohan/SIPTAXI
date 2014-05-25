// Coleccion temporal del panel de Llamadas
PanelCalls = new Meteor.Collection('panelCalls');

/*// Formato de Inicializacion de la Coleccion
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

//----------------------------------------------------------------------------------------------*/

// Metodos de la Coleccion

Meteor.methods({
	panelCallsInsert : function (data) {
		var insertCall = PanelCalls.insert(data);
		console.log('\n---> NUEVO DOCUMENTO EN PANEL CALLS... ID = ', insertCall, '<---\n');
		return insertCall;
	},

	panelCallsHangup : function (uniqueId) {
		//PanelCalls.remove({siptaxiCallAsteriskUniqueId : uniqueId});
		console.log('---> Registro Borrado OK <---');
	},

	panelCallsUpdateStatus : function (uniqueId, data){
		PanelCalls.update({siptaxiCallAsteriskUniqueId : uniqueId}, {$set:data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en STATUS panelCalls', err);
				return;
			}
			if (result === 1) {
				console.log ('---> PANELCALLS STATUS [',data.state,'] UPDATE = ', result, ' ---> CAMBIO EXITOSO <---\n\n\n');
				return result;
			}
			else{
				console.log ('---> PANELCALLS STATUS [',data.state,'] UPDATE  = ', result,' ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n\n');
				return;
			}
		});
	}

});