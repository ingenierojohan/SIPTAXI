// Escuchamos todos los Eventos del Asterisk
//ami.on('managerevent', printAllEvents);
ami.on('newchannel', Meteor.bindEnvironment(evaluateNewChannel, evaluateNewChannelErr));

ami.on('newstate', Meteor.bindEnvironment(evaluateNewState, evaluateNewStateErr));

ami.on('hangup', Meteor.bindEnvironment(evaluateHangupChannel, evaluateHangupChannelErr));


//ami.on('hangup', printAllEvents);

//allow any connected client to listen on the stream
/*notificationsAsterisk.permissions.read(function(eventName) {
		return true;
});*/

//notifications.on('HOLA',function(message){console.log('-------------------- NOTIFI--------', message);});

//---------------------------------------------------------------------------------------------------------------
// Creamos una expresion regular para comparar con los eventos AMI de NEW CHANNEL y HANGUP
var trunkSIP = "^SIP/UNE-2486385-"; 
var re = new RegExp(trunkSIP);

//----------------------------------------------------------------------------------------------------------------

function printAllEvents (evt){

if(evt.channel){
	if (evt.channel.match(re)){
		console.log ('\n------ >> EVENTO <<------');
		console.log (evt);
		console.log ('------------------------ \n');

		asteriskUniqueId1 = evt.uniqueid;
	}
}

	if (evt.uniqueid === asteriskUniqueId1){
		printUniqueId(evt, asteriskUniqueId1);
	}


};

function printUniqueId(evt, asteriskUniqueId1){
		console.log ('\n------ >> EVENTO UNUQUE <<------',asteriskUniqueId1);
		console.log (evt);
		console.log ('------------------------ \n');
};



//------ Evaluamos Los Nuevos estados desde ami.ON
function evaluateNewState(evt){

	if (evt.channel.match(re)){
		var newState = {};
		var asteriskUniqueId = evt.uniqueid;
		var asteriskChannelStateDesc = evt.channelstatedesc;
		newState.state =  parseInt(evt.channelstate);
		newState.agentExten = parseInt(evt.connectedlinenum);
		console.log ("\n---> NEWSTATE en la LLamada Entrante [",newState.state, '=', asteriskChannelStateDesc, '] <---');
		if(newState.state === 6){
			console.log("---> Contesto la Extension [",newState.agentExten,'] <---');
			Meteor.call('panelCallsUpdateState', asteriskUniqueId, newState );

			// Actualizamos SiptaxiCall por Answer
			var siptaxiCallData = {
				wasAnswer : true,
				agentExten : newState.agentExten
			};
			Meteor.call('siptaxiCallsAnswer', asteriskUniqueId, siptaxiCallData );
		}
		return;
}
else{
	console.log ("\n>>> SE DETECTO UN NEW STATE PERO NO ES DE LA LLAMADA ENTRANTE <<< ");
	return;
}
};
function evaluateNewStateErr(err){
	console.log('FALLO TO BIND ENVIRONMENT en evaluateNewState', err);
};


//----------------------------------------------------------------------------------------------------------------

// Funcion para Evaluar las Llamadas Entrantes desde ami.on
function evaluateNewChannel(evt){
	//console.log ('---> New CHANNEL <---');
	if (evt.channel.match(re)){

		// Variables de la Funcion
		var asteriskChannel = evt.channel;
		var asteriskPhone = parseInt(evt.calleridnum);
		var asteriskUniqueId = evt.uniqueid;
		var insertPanelCall = {};		// Objeto que contiene la Info de la Coleccion Temporal panelCalls
		var customer = null;

		// Llamamos La Funcion siptaxiCallCount para saber cuantas llamadas a tenido el Telefono asteriskPhone
		insertPanelCall.siptaxiCallCount = siptaxiCallCount(asteriskPhone);

		// Consultamos la Info de la Ultima LLamada si existe.
		if (insertPanelCall.siptaxiCallCount === 0 ){
			insertPanelCall.siptaxiCallLast = null;
		}
		else {
			// Consultamos la Ultima LLamada del Telefono
			insertPanelCall.siptaxiCallLast = siptaxiCallLast(asteriskPhone);
			// Marcamos Si la es una Rellamada
			insertPanelCall.isRecall = isReCall(insertPanelCall.siptaxiCallLast.timestampHangup);
		}

		insertPanelCall.siptaxiCallAsteriskUniqueId = asteriskUniqueId;

		insertPanelCall.siptaxiCallPhone = asteriskPhone;
		insertPanelCall.siptaxiCallCod = asteriskPhone % 100;

		insertPanelCall.agentExten = null;

// ---------  Establecemos Un Nuevo Documento para siptaxiCalls  ------------------------------
		//var id = new Meteor.Collection.ObjectID();
		var timestampIncoming = new Date().getTime();
		var timeIncoming = moment(timestampIncoming).format("dddd, MMMM DD YYYY, HH:mm:ss");

		console.log('\n---> LLAMADA NUEVA del Telefono: ', asteriskPhone , ' El '+ timeIncoming, '<---');

		var newCall = {
			timestampIncoming : timestampIncoming,
			timeIncoming : timeIncoming,
			timestampHangup : '',
			timeHangup: '',
			phone : asteriskPhone,
			asteriskChannel : asteriskChannel,
			asteriskUniqueId : asteriskUniqueId,
			//status : '0',
			agentId : '',
			agentName : '',
			agentExten : null,
			wasAnswer : false
		};

		insertPanelCall.siptaxiCallId = siptaxiCallsInsertNewCall(newCall);

//---------------------------------------------------------------------------------------------------------

// -----Buscamos si existe un Cliente con el numero telefonico.
		customer = customerFind(asteriskPhone);

		// Si no Existe Marcamos Como Customer Nuevo
		if (!customer){
			insertPanelCall.isNewCustomer = true;
		}
		else{
			// Llenamos Los Datos de Customer en Panel Calls
			insertPanelCall.isNewCustomer = false;
			insertPanelCall.customerId = customer._id;
			insertPanelCall.customerName = customer.name;
			insertPanelCall.customerAddress = customer.address;
			insertPanelCall.customerAddressReference = customer.addressReference;
			insertPanelCall.customerComments = customer.comments;

			// Buscamos Cuantos Servicios ha Tenido el Numero Telefonico
			insertPanelCall.serviceCount = serviceCount(asteriskPhone);

			// Consultamos Los ultimos 2 Servicios
			if (insertPanelCall.serviceCount === 0) {
				insertPanelCall.servicesLasts = null;
			}
			else{
				insertPanelCall.servicesLast = servicesLast(asteriskPhone);
			}
		}

//---------------------------------------------------------------------------------------------------------
		// Insertamos todos los Documentos Recolectados.
		insertPanelCall.state = 4;		// es estado 4 es Timbrando segun Asterisk, 6 = hablando;
		panelCallsInsertNewCall(insertPanelCall);
		//console.log('\n---> Nuevo Registro Ingresado en PANELCALLS con id=', insertPanel);
		//console.log('----- ESTO VA PA LA VISTA DEL AGENTE ---\n', insertPanelCall);

	}// Fin del IF Pricipal
	else {
		console.log ("\n>>> SE DETECTO UN NEW CHANNEL PERO NO ES LLAMADA ENTRANTE <<< ");
	}
};

//***************************************************************************************************
//---------------------------------------------------------------------------------------------------
// Funcion Callback de error cuando falla el bind.Environment Fiber
function evaluateNewChannelErr(err){
	console.log('FALLO TO BIND ENVIRONMENT EN evaluateNewChannel', err);
};

//***************************************************************************************************




//---------------------------------------------------------------------------------------------------
// Funcion para Evaluar las Llamadas Colgadas desde ami.on
function evaluateHangupChannel(evt){
	//console.log ('---> HANGUP CHANNEL <---');
	if (evt.channel.match(re)){
		var timestampHangup = new Date().getTime();
		var timeHangup = moment(timestampHangup).format("dddd, MMMM DD YYYY, HH:mm:ss");
		var asteriskchannel = evt.channel;
		var phone = evt.calleridnum;
		var asteriskUniqueId = evt.uniqueid;
		
		console.log('\n---> SE HA COLGADO LA LLAMADA DEL TEL: ', phone, ' , El ', timeHangup,'<---');

		var asteriskCallsHangup= {
			timestampHangup: timestampHangup,
			status : '2'
		};

		var siptaxiCallsHangup = {
			timestampHangup : timestampHangup,
			timeHangup: timeHangup
			//status : '2'
		};

		// Estado de la Llamada Colgada
		var newState = {
			state : 0
		}

		// Llamamos al Metodo de la Coleccion asteriskCalls
		Meteor.call('asteriskCallsUpdateHangupCall', asteriskUniqueId, asteriskCallsHangup);

		// Llamamos al Metodo de la coleccion siptaxiCalls para actualizar la Fecha de Colgado
		Meteor.call('siptaxiCallsUpdateHangupCall', asteriskUniqueId, siptaxiCallsHangup);

		// Llamamos al Metodo de la Coleccion panelCalls con state 0 que es Colgado
		Meteor.call('panelCallsUpdateState', asteriskUniqueId, newState);

		// Retrasamos el Remove del Documento en el panel calls.
		Meteor.setTimeout(function(){removePanelCallHangup(asteriskUniqueId);}, 3000);
	}

	else {
		console.log ("\n>>> SE DETECTO UN  HANGUP CHANNEL PERO NO CORRESPONDE A UNA LLAMADA ENTRANTE <<< ");
	}
};



// Funcion Callback de error cuando falla el bind.Environment Fiber
function evaluateHangupChannelErr(err){
	console.log('FALLO TO BIND ENVIRONMENT', err);
};




//---------------------------------FUNCIONES --------------------------------------------------------
//---------------------------------------------------------------------------------------------------
// Funcion Para Saber si es una Rellamada conociendo la fecha de la Ultima Llamada
function isReCall (siptaxiCallLast){
	if(!siptaxiCallLast){
		return null;
	}
	var now = new Date().getTime();
	var diff = (now - siptaxiCallLast)/1000;
	console.log('---> La Diferencia en Tiempo con la Utima Llamada es = ', diff, ' sg <---');

	if (diff < 60){
		console.log('---> Por Tanto es una RELLAMADA <---\n');
		return true;
	}
	console.log('---> NO es una Rellmada <---\n');
	return false;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion Para Consultar cuantas llamadas A Tenido un Numero Telefonico.
function siptaxiCallCount (asteriskPhone){	
	var data = null;
	Meteor.call('siptaxiCallsCount', asteriskPhone , function (error, result) {
		if (error){
			console.log('---> UPS UN ERROR AL CONTAR LAS LLLAMADS EN SIPTAXICALLS', error);
			return data = 0;
		}
		return data = result;
	});
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion para Consultar la Ultima llamada del Numero Telefonico
function siptaxiCallLast (asteriskPhone){
	var data = null;
	Meteor.call('siptaxiCallsLast', asteriskPhone, function (error, result) {
		if (error){
			console.log('---> UPS UN ERROR AL LOCALIZAR LA ULTIMA LLAMADA EN SIPTAXICALLS', error);
			return null;
		}
		return data = result;
	});
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion Para Insertar Un Nuevo Documento en siptaxiCalls
function siptaxiCallsInsertNewCall(newCall){
	var data = null;
	Meteor.call('siptaxiCallsInsertNewCall', newCall, function (error, result) {
		if (error) {
			console.log('---> UPS UN ERROR AL GRABAR EN MONGO', error);
			return null;
		}
		else{
			return data = result;
		}
	});		// Fin de Meteor.call
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion para Buscar si Existe Un Usuario con el Numero Telefonico.
function customerFind(asteriskPhone){
	var data = null;
		Meteor.call('customersFindPhone', asteriskPhone , function (error, result) {
			if (error){
				console.log('---> UPS UN ERROR En la Consulta del Cliente EN MONGO', error);
				return;
			}
			else {
				return data = result;
			}
		});
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion para Consultar el Numero de Servicios que ha Tenido el Numero Telefonico.
function serviceCount (asteriskPhone){
	var data = null;
	Meteor.call('servicesCount', asteriskPhone , function (error, result) {
		if (error){
			console.log('---> UPS UN ERROR AL CONTAR LOS SERVICIOS DEL PHONE', error);
			return data = 0;
		}
		return data= result;
	});
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion Para Trar los ultimos 2 Servicios
function servicesLast(asteriskPhone){
	var data = null;
	Meteor.call('servicesLast', asteriskPhone, function (error, result) {
		if (error){
			console.log('---> UPS UN ERROR AL TRAER LOS ULTIMOS 2 Servicios', error);
			return data = null;
		}
		return data = result;
	});
	return data;
};
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion para Insertar los Datos en la Coleccion Temporal de Panel Calls
function panelCallsInsertNewCall(insertPanelCall){
	var data = null;
	Meteor.call('panelCallsInsert', insertPanelCall, function (error, result) {
		if (error){
				console.log('---> UPSS UN ERROR AL INSERTAR EN PANELCALLS', error);
				return data = null;
		}
		return data = result;
	});
	return data;
}
//***************************************************************************************************


//---------------------------------------------------------------------------------------------------
// Funcion para Remove el Documento de PanelCalls
function removePanelCallHangup (asteriskUniqueId){
	// Llamamos al Metodo de la Coleccion panelCalls para Borrar el Registro.
	

	Meteor.call('panelCallsHangup', asteriskUniqueId, function (error, result) {
		if(error){
			console.log('---> UPSsss, No se pudo Borrar el Documento en PANELCALLS ',error, '<---');
			//return;
		}
		//console.log('---> Documento en PANELCALLS BORRADO OK <---');
	});


//Meteor.call('panelCallsHangup', asteriskUniqueId);
}