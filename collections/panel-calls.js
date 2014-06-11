// Coleccion temporal del panel de Llamadas
PanelCalls = new Meteor.Collection('panelCalls');


/*****************************************************************************************
MAPA de la Coleccion
------------------------------------------------------------------------------------------
_id : "string"	---> Id del Documento

agentExten : "int32"	--->	Numero de la Extension que Contesto la LLamada, Null cuando no han contestando

customerAddress : "string"	--->	Direccion del Cliente, en Blanco Si no Exite
customerAddressReference : "string"	--->	Referencia de la Direccion del Cliente
customerComments : "string"	--->	Comentarios del Cliente
customerId : "string"	--->	Id del Documento del Clinte
customerName : "string"	--->	Nombre del Cliente

isNewCustomer : "bolean"	---> True si existe el Cliente, false y no Existe
isRecall : "bolean"	---> True Cuando a Llamado antes de 10 minutos despues de la Ultima Llamada

servicesLast : "object"	--->	Objeto con La Info de los 2 Ultimos Servicios del Cliente

siptaxiCallAsteriskUniqueId : "string"	---> Id de la Llamada en Asterisk
siptaxiCallCod : "int32"	--->	Codigo del Cliente
siptaxiCallCount : "int32"	--->	Numero de Llamadas que ha Realizado el Cliente
siptaxiCallId : "string"	---> Id de la Llamada
siptaxiCallLast : "object"	--->	Objeto con TODA la Info del ultima LLamada.
siptaxiCallPhone : "int32"	--->	Telefono del Cliente

state : "int32"	---> Estado de la LLamada en El Panel
	0 = Colgado
	4 = Timbrando
	6 = Hablando

------------------------------------------------------------------------------------------
******************************************************************************************/







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