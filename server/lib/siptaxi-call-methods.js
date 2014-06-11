
// Metodos de la Coleccion
Meteor.methods({
	// Agragamos Un nuevo Documento an siptaxiCalls
	siptaxiCallsInsertNewCall: function(dataCall){
		var insertCall = SiptaxiCalls.insert(dataCall);
		console.log('---> LLAMADA REGISTRADA id = ', insertCall, '<---\n');
		return insertCall;
	},

	// Actualizar Status Y Fecha de hangup
	siptaxiCallsUpdateHangupCall: function(uniqueId, data){
		console.log('---> ACTUALIZANDO siptaxiCalls por HANGUP con UNIQUEID = ', uniqueId, '<---');

		SiptaxiCalls.update({asteriskUniqueId : uniqueId}, {$set: data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en siptaxiCalls por HANGUP', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SIPTAXICALLS UPDATE  por HANGUP = ', result, ' ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SIPTAXICALLS UPDATE  por HANGUP = ', result,' ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	},

	// Metodo para Contar la cantidad de llamadas de un Numero Telefonico
	siptaxiCallsCount : function (phone){
		var count = SiptaxiCalls.find({phone:phone}).count();
		console.log ('---> El Telefono : ', phone, ' ha llamadado ', count , ' veces. <---');
		return count;
	},

	//Metodo para Buscar el Ultimo Servicio
	siptaxiCallsLast : function (phone) {
		var last = SiptaxiCalls.findOne({ phone : phone },{ sort : {$natural: -1}});
		console.log ('---> La Ultima LLamada fue :', last.timeHangup, '<---');
		return last;
	},

	//Metodo para Actualizar datos cuando Es Contestada la Llamada
	siptaxiCallsAnswer : function (uniqueId, data){
		console.log('\n---> ACTUALIZANDO siptaxiCalls por ANSWER con UNIQUEID = ', uniqueId, '<---');
		SiptaxiCalls.update({asteriskUniqueId : uniqueId}, {$set: data}, function(err, result){
			if (err){
				console.log('ERROR AL HACER UPDATE en siptaxiCalls por ANSWER', err);
				return;
			}
			if (result === 1) {
				console.log ('---> SIPTAXICALLS UPDATE por ANSWER = ', result, ' ---> CAMBIO EXITOSO <---\n\n');
				return result;
			}
			else{
				console.log ('---> SIPTAXICALLS UPDATE = ', result,' ---> UPssss, NO SE REALIZO EL CAMBIO <---\n\n');
				return;
			}
		});
	}


});