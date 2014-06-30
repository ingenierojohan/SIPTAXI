// FUnciones Iniciales del Sistema
Meteor.startup( function () {

	//-------------------------------------------------------------------------
	// Subscripccion a todos documentos de PANELCALLS
	Meteor.subscribe('panelCalls');

	// Subscripcion Solo a los Servicios del Dia
	Meteor.subscribe('servicesDay');

	// Subscripcion a las Coleccions typeahead
	Meteor.subscribe('addressReferences');
	Meteor.subscribe('customersNames');
	Meteor.subscribe('movilAndPlaca');
	//-------------------------------------------------------------------------
	
	//-------------------------------------------------------------------------
	// Metodo para Obtener la Hora del Server
	Meteor.setInterval( function (){
		Meteor.call('getServerTime', function (error, result) {
			Session.set('horaSistema', result);
		});
	},1000);

	// Limpiamos todas las Alertas despues de un reload
	console.log( "---> ESTAMOS LISTOS <---" );
	loginMessages.defaultAgent();

	// Limpiamos todos los Mensajes del Panel de notificaciones
	Session.set('panelNotificaciones', null);
	//-------------------------------------------------------------------------


	//-------------------------------------------------------------------------
	// Control de los TypeHead de Nombres , Referencias y Movil-Placa

	// TYPEAHEAD CUSTOMER NAMES
	Deps.autorun(function () {
		var customersNames = CustomersNames.find().fetch();
/*		var mapCustomerNames = _.map(customersNames, function(data){
			return ('"'+data.name+'"');
		});*/
		var customerNamesTypeahead = _.pluck(customersNames, 'name');
		var typeaheadCustomerName = $('.typeaheadCustomerName').data('typeahead');
		if (typeaheadCustomerName){
			typeaheadCustomerName.source = customerNamesTypeahead;
		}
		else{
			$('.typeaheadCustomerName').typeahead({source:customerNamesTypeahead});
		}
		Session.set('typeaheadCustomerName', customerNamesTypeahead);
	});


	// TYPEAHEAD CUSTOMER ADDRESS REFERENCE
	Deps.autorun(function () {
		var addressReference = AddressReferences.find().fetch();
		var customerAddressReferenceTypeahead = _.pluck(addressReference, 'addressReference');
		var typeaheadCustomerAddressReference = $('.typeaheadCustomerAddressReference').data('typeahead');
		if (typeaheadCustomerAddressReference){
			typeaheadCustomerAddressReference.source = customerAddressReferenceTypeahead;
			typeaheadCustomerAddressReference
		}
		else{
			$('.typeaheadCustomerAddressReference').typeahead({source:customerAddressReferenceTypeahead});
		}
	});

	// TYPEAHEAD MOVIL y PLACA
	Deps.autorun(function () {
		var taxis = Taxis.find().fetch();
		var typeaheadMovil = _.map(taxis, function(data){
			var movilyPlaca = '"'+data.movil+" -- "+data.placa+'"';
			return movilyPlaca;
		});
		Session.set('movilAndPlaca', typeaheadMovil);
	});
});

// --------------- FUNCIONES GENERALES DE LA APLICACION ----------------

// Funcion para contar Los Digitos de Un Numero
countDigitsNumber = function(num){
	return num.toString().length;
}

// Funcion para Mostrar los Mensajes de Notificaciones
showNotificaciones = function (data, phone){
	Session.set('panelNotificaciones', {
		classAlert : data.classAlert,
		classLabel : data.classLabel,
		mensaje : data.mensaje
	});
	$('#divPanelNotificaciones').fadeIn("fast");
	Meteor.setTimeout(function(){
		$('#divPanelNotificaciones').fadeOut("slow");
	}, 5000);
};

mapaNotificaciones = {
	lanzarServicioOk:{
		classAlert : "alert alert-success",
		classLabel : "label label-warning",
		mensaje : "-- Nuevo Servicio Lanzado --"
	},
	lanzarServicioError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al Lanzar el Servicio ---"
	},

	guardarClienteOk : {
		classAlert : "alert alert-success",
		classLabel : "label label-success",
		mensaje : " -- Los Datos del Cliente se han Guardado ---"
	},
	guardarClienteError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al Guardar los datos del Cliente ---"
	},

	movilNoEncontrado: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- El Movil no Existe, Por Favor, Seleccione un Movil de la Lista ---"
	},
	movilNoSelecionado: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Por Favor, Seleccione un Movil para Asigar el Servicio---"
	},

	serviceAllocateOk : {
		classAlert : "alert alert-info",
		classLabel : "label label-info",
		mensaje : " -- El Servicio Asigando Correctamente ---"
	},
	serviceAllocateError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al Asiganar el Servicio---"
	},

	serviceCancelError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al Cancelar el Servicio---"
	},
	serviceCancelOk: {
		classAlert : "alert alert-success",
		classLabel : "label label-important",
		mensaje : " -- Servicio CANCELADO Correctamente ---"
	},

	servicePickupError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al Finalizar el Servicio---"
	},
	servicePickupOk: {
		classAlert : "alert alert-success",
		classLabel : "label label-success",
		mensaje : " -- Servicio FINALIZADO Correctamente ---"
	},

	serviceReallocateError: {
		classAlert : "alert alert-error",
		classLabel : "label label-important",
		mensaje : " -- Error al REASIGNAR el Servicio---"
	},
	serviceReallocateOk: {
		classAlert : "alert alert-success",
		classLabel : "label label-inverse",
		mensaje : " -- Servicio RE-ASIGNADO Correctamente ---"
	},


}