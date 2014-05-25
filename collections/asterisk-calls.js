// Coleccion Llamadas por AGI escritas por ASTERISK y PHP
AsteriskCalls = new Meteor.Collection('asteriskCalls');


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

// Metodos de la Coleccion
Meteor.methods({
	// Actualizar Status Y Fecha de hangup asteriskCalls
	asteriskCallsUpdateHangupCall: function(uniqueId, data){
		console.log('---> ACTUALIZANDO asteriskCalls con UNIQUEID = ', uniqueId, '<---');
		AsteriskCalls.update({uniqueId : uniqueId}, {$set: data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en asteriskCalls', err);
				return;
			}
			if (result === 1) {
				console.log ('---> ASTERISKCALLS UPDATE = ', result, ' ---> CAMBIO EXITOSO <---');
				return result;
			}
			else{
				console.log ('---> ASTERISKCALLS UPDATE = ', result, ' ---> UPssss, NO SE REALIZO EL CAMBIO <---');
				return;
			}
		});
	}

});


