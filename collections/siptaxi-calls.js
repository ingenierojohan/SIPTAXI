// Coleccion Ingreso de Llamdas por AMI a la plataforma
SiptaxiCalls = new Meteor.Collection('siptaxiCalls');

/*****************************************************************************************
MAPA de la Coleccion
------------------------------------------------------------------------------------------
id : "string"	--->	id del documento
agentId : "string"	---> Id del Agente que contesto la LLamada
agentName : "string"	---> Nombre del Agente Que Contesto la LLamada
agentExten : "int32"	---> Extension de donde se contesto la Llamada

asteriskChannel : "string"	---> Nombre del Canal por donde Ingreso la LLamada
asteriskUniqueId : "string"	---> Id de la llamada En Asterisk
phone : "int32"	--->	Numero de telefono

timeHangup : "string"	---> Formato de Fecha de Colgado
timestampHangup : "timestamp"	--->	hora y Fecha de Colgado de la Llamada

wasAnswer : "bolean"	---> True si la Llamada Fue Contestada
------------------------------------------------------------------------------------------
******************************************************************************************/




















/*SiptaxiCalls.allow({
	insert : function() { return true }
});*/

//------  FORMATO DOCUMENTO
//	_id : ObjectId	--->	Id unico en formato ObjectId 			(siptaxi)
//	phone : "string"	--->	Numero Telefonico en el callerIdNum del ami 	(siptaxi)
//	asteriskChannel : "string"	---> Nombre del Canal por donde ingreso la llamada (siptaxi)
//	asteriskUniqueId : "string"	---> uniqueid de la llamada en el asterisk del ami (siptaxi)
//	times : objetc
//		timestampIncoming	: "int32"---> huella de tiempo del ingreso de la Llamada 	(siptaxi)
//		timeIncoming : "string"	---> Formato de la hora de ingreso (siptaxi)
//		timestampHangup	: "int32" --->	Huella de tiempo del Colgado de la llamada 	(siptaxi)
//		timeHangup : "string"	---> Formato de la hora de cuelgue (siptaxi)
//	agent : "string"	---> Nombre del agente que recibe la llamada (siptaxi)
//	status : "string"
//		0 = Nueva llamada en panel llamadas (siptaxi)
//		1 = Llamada Lanzada al panel de servicios (siptaxi)
//		2 = Llamada Finalizada CON Servicio asignado (siptaxi)
//		3 = Llamada Finalizada SIN Servicio asignado (siptaxi)

//----------------------------------------------------------------------------------------------

/*
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

//---------------------------------------------------------------------------------------------------*/

