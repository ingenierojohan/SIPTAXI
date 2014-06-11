// Metodos de la Coleccion
Meteor.methods({
	// Actualizar Status Y Fecha de hangup asteriskCalls
	asteriskCallsUpdateHangupCall: function(uniqueId, data){
		console.log('\n\n---> ACTUALIZANDO asteriskCalls con UNIQUEID = ', uniqueId, '<---');
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
