//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE ROWDATACALL+++++++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.rowDataCall.helpers({

	stateCalls : function(){
		var state = this.state;
		var exten = ':'+this.agentExten;
		var stateCalls = {};
		switch (state){
			case 4 :
				stateCalls.desc = '';
				stateCalls.state = 'badge state-ring';
				stateCalls.icon	= 'icon-bell-alt';
				break;
			case 6 :
				stateCalls.desc = exten;
				stateCalls.state = 'badge state-answer';
				stateCalls.icon	= 'icon-aling-left icon-phone';
				break;
			default :
				stateCalls.desc = '';
				stateCalls.state = 'badge state-hangup';
				stateCalls.icon	= 'icon-circle-arrow-down';
				break;
		}
		return _.extend({stateCall: stateCalls}, this);		
	}

});


//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE CUSTOMER +++++++++++++++++++++++++++++++++++++//
//********************************************************************************//

// Variable para el Color de la Fila Cuando el Cliente Existe
Template.templateCustomer.rowColor= function (){
	if(this.isRecall === true) {
		return "warning";
	}
	return "success";
};

Template.templateCustomer.rendered = function () {
	$('.typeaheadCustomerName').typeahead({source:Session.get('typeaheadCustomerName')});
};

Template.templateCustomer.helpers({

});


// Evetos del Template CUSTOMER
Template.templateCustomer.events({

	// Evento para ver info de La Ultima Llamada
	'mouseenter .lastCall': function (e,t) {
		e.preventDefault();
		var lastCall = "#lastCall-"+this.siptaxiCallId;
		var time = moment(this.siptaxiCallLast.timestampHangup).calendar();
		$(lastCall).popover({
			content: time,
			trigger: 'hover',
			placement: 'bottom'
		});
	},

	// Evento para ver Info de los Ultimos Servicios
	'mouseenter .lastServices': function (e,t) {
		e.preventDefault();
		var lastServices = "#lastServices-"+this.siptaxiCallId;
		var services = this.servicesLast;
		var html = '';
		for (var key in services){
			var timeFormat = moment(key.timeAllocate).format("DD/MM/YYYY, HH:mm:ss");
			html += '<div class="span6 ">\
				<div class="panel-body">\
					<table class ="table table-bordered table-condensed">\
						<tr>\
							<td class="text-left">'+ timeFormat +'<br>\
									<strong>Movil</strong>: '+ services[key].taxiMovil +'<br>\
									<strong>Placa</strong>: '+ services[key].taxiPlaca +'<br>\
									<strong>Agente</strong>: '+ services[key].agentName +'<br>\
									<strong>Status</strong>: OK<br>\
									</td>\
						</tr>\
					</table>\
				</div>\
			</div>';
		}
		$(lastServices).popover({
			trigger: 'click',
			placement: 'bottom',
			html : true,
			content: html
		});
	},

	// Evento Click del FORMULARIO del panel Llamadas de cada Linea.
	'click #btnLanzar': function(evt, temp) {
		evt.preventDefault();
		launchService(this);
	},

	'keyup :input' : function(evt, temp){
		if (evt.which === 13){
			launchService(this);
		}
	}
	
});


//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE NEW CUSTOMER++++++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.templateNewCustomer.rendered = function () {
	$('.typeaheadCustomerName').typeahead({source:Session.get('typeaheadCustomerName')});
};


Template.templateNewCustomer.helpers({

});

// Eventos y Datos TEMPLATE NEW CUSTOMER
Template.templateNewCustomer.events({
	'mouseenter .lastCall': function (e,t) {
		e.preventDefault();
		var lastCall = "#lastCall-"+this.siptaxiCallId;
		var time = moment(this.siptaxiCallLast.timestampHangup).calendar();
		$(lastCall).popover({
			content: time,
			trigger: 'hover',
			placement: 'bottom'
		});
	},

	// Evento Click del FORMULARIO del panel Llamadas de cada Linea.
	'click #btnLanzar': function(evt, temp) {
		evt.preventDefault();
		launchService(this);
	},

	'keyup :input' : function(evt, temp){
		if (evt.which === 13){
			launchService(this);
		}
	}
});

//********************************************************************************//
//+++++++++++++++++++++++++ FUNCIONES GENERALES ++++++++++++++++++++++++++++++++++//
//********************************************************************************//
function launchService (data){

	var currentPanelId = data._id;	// id de la Fila Actual
	
	// Objeto con los Datos del Customer en Mayusculas de los diferentes INPUTS
	var customerData = {
		name : $("#customerName-"+currentPanelId).val().toUpperCase(),
		address : $("#customerAddress-"+currentPanelId).val().toUpperCase(),
		addressReference : $("#customerAddressReference-"+currentPanelId).val().toUpperCase(),
		comments : $("#customerComments-"+currentPanelId).val().toUpperCase()
	};

	// Si es un Cliente Nuevo Creamos Documento, si No, solo Actualiazamos campos
	if(data.isNewCustomer){
		customerData.phone = data.siptaxiCallPhone;
		customerData.cod = data.siptaxiCallCod;
		
		
		// Llamamos al Metodo para Insertar y nos retorna el Id
		Meteor.call('customerInsert', customerData);
		customerData.id = null;
	}
	else{
		// Actualizamos el Documento del Customer
		customerData.id = data.customerId; // Obtenemos el Id del Customer por el objeto this.
		Meteor.call('customerUpdate', data.customerId, customerData);
	}


		// Almacenamos El Nombre en la Typeahead CustomerNames
		// Consultamos si Existe un Nombre de Usario
		if(!customerData.name==""){
			var customerName = CustomersNames.findOne({name:customerData.name});
			if (!customerName){
				Meteor.call('customersNamesInsert', customerData.name, function (error, result) {});
			}
		}

		if(!customerData.addressReference==""){
			var customerAddressReference = AddressReferences.findOne({addressReference:customerData.addressReference});
			if (!customerAddressReference){
				Meteor.call('customersAddressReferenceInsert', customerData.addressReference, function (error, result) {});
			}
		}

		// Objeto con los Datos del Nuevo Servicio
		var newService = {
			customerId : customerData.id,
			customerPhone : data.siptaxiCallPhone,
			customerAddress : customerData.address,
			customerAddressReference : customerData.addressReference,
			customerComments : customerData.comments,
			customerCod : data.siptaxiCallCod,
			customerName : customerData.name,
			siptaxiCallId : data.siptaxiCallId,
			siptaxiCallAsteriskUniqueId : data.siptaxiCallAsteriskUniqueId,
			taxiId : "",
			taxiMovil : "",
			taxiPlaca : "",
			agentId : Meteor.userId(),
			agentName : Meteor.user().username,
			comments : "",
			status : 0
		};

		// Creamos el nuevo Servicio
		Meteor.call('servicesNew', newService, function(error, result) {
				if (error){
					showNotificaciones(mapaNotificaciones.lanzarServicioError);
				}
				showNotificaciones(mapaNotificaciones.lanzarServicioOk);
		});

		// Borramos el Registro en PanelCalls
		Meteor.call('panelCallsHangup', data.siptaxiCallAsteriskUniqueId, function (error, result) {
			if(error){
				console.log('---> UPSsss, No se pudo Borrar el Documento en PANELCALLS ',error, '<---');
				//return;
			}
			//console.log('---> Documento en PANELCALLS BORRADO OK <---');
		});

}