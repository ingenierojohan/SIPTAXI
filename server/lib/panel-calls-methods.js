// Metodos de la Coleccion

Meteor.methods({
	// Insertamos Un nuevo Documento
	panelCallsInsert : function (data) {
		var insertCall = PanelCalls.insert(data);
		console.log('\n---> NUEVO DOCUMENTO EN PANEL CALLS... ID = ', insertCall, '<---\n');
		return insertCall;
	},

	// Borramos el Registro de la coleccion PanelCalls cuando es state = 0 o cuando damos Click en BTN LANZAR
	panelCallsHangup : function (uniqueId) {
		//PanelCalls.remove({siptaxiCallAsteriskUniqueId : uniqueId});
		console.log('---> PANEL CALLS, Registro Borrado OK <---');
	},

	// STATUS : 0=Colgado, 4=Timbrando, 6=Hablando
	panelCallsUpdateState : function (uniqueId, data){
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