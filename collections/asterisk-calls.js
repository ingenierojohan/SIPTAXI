// Coleccion Llamadas por AGI escritas por ASTERISK y PHP
AsteriskCalls = new Meteor.Collection('asteriskCalls');

/*****************************************************************************************
MAPA de la Coleccion
------------------------------------------------------------------------------------------
_id : ObjectId	--->	Id unico en formato ObjectId 			(astetisk)
cid : "string"	--->	Numero Telefonico en el callerIdNum del Asterisk 	(asterisk)
uniqueId : "string"	---> uniqueid de la Llamada del asterisk (asterisk)
timestampIncoming	: "int32"---> huella de tiempo del ingreso de la Llamada 	(asterisk)
timestampHangup	: "int32" --->	Huella de tiempo del Colgado de la llamada 	(asterisk o siptaxi)

status : "string"
	0 = Nueva llamada (Write Asterisk)
	1 = Llamada recibida por la app SIPTAXI (write Meteor)
	2 = Llamada Finalizada por la app SIPTAXI (write Meteor)
	3 = Llamada Finalizada por Asterisk (write Asterisk)
------------------------------------------------------------------------------------------
******************************************************************************************/










/*AsteriskCalls.deny({
	insert : function() { return true }
});*/

//------  FORMATO DOCUMENTO
//	_id : ObjectId	--->	Id unico en formato ObjectId 			(astetisk)
//	cid : "string"	--->	Numero Telefonico en el callerIdNum del Asterisk 	(asterisk)
//	uniqueId : "string"	---> uniqueid de la Llamada del asterisk (asterisk)
//	timestampIncoming	: "int32"---> huella de tiempo del ingreso de la Llamada 	(asterisk)
//	timestampHangup	: "int32" --->	Huella de tiempo del Colgado de la llamada 	(asterisk o siptaxi)

// status : "string"
//		0 = Nueva llamada (Write Asterisk)
//		1 = Llamada recibida por la app SIPTAXI (write Meteor)
//		2 = Llamada Finalizada por la app SIPTAXI (write Meteor)
//		3 = Llamada Finalizada por Asterisk (write Asterisk)
//----------------------------------------------------------------------------------------------------



