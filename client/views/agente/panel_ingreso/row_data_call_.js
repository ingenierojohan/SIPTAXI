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

// TYPEAHEAD CUSTOMERNAMES y ADDRESSREFERENCES
Template.templateCustomer.rendered = function () {
	$('.inputCustomersNames').typeahead({source:Session.get('allNames')});
	$('.inputCustomersAddressReferences').typeahead({source:Session.get('allAddressReferences')});
};


// Variable para el Color de la Fila Cuando el Cliente Existe
Template.templateCustomer.rowColor= function (){
	if(this.isRecall === true) {
		return "warning";
	}
	return "success";
};

// Evetos del Template
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

		// almacenamos los IDs de los diferentes Documentos de las Colecciones.
		var currentSiptaxiCallId = this.siptaxiCallId;
		var currentCustomerId = this.customerId;
		var currentPanelId = this._id;
		var currentSiptaxiCallAsteriskUniqueId = this.siptaxiCallAsteriskUniqueId;

		// Convertimos en MAYUSCULAS
		var currentName = $("#customerName-"+currentPanelId).val();
		var currentAddress = $("#customerAddress-"+currentPanelId).val();
		var currentAddressReference = $("#customerAddressReference-"+currentPanelId).val()
		var currentComments = $("#customerComments-"+currentPanelId).val();
		
		// Objeto con los Datos Update del Customer en Mayusculas
		var customerUpdates = {
			name : currentName.toUpperCase(),
			address : currentAddress.toUpperCase(),
			addressReference : currentAddressReference.toUpperCase(),
			comments : currentComments.toUpperCase()
		};

		// Objeto con los Datos del Nuevo Servicio
		var newService = {
			customerId : this.customerId,
			customerPhone : this.siptaxiCallPhone,
			customerAddress : customerUpdates.address,
			customerAddressReference : customerUpdates.addressReference,
			customerComments : customerUpdates.comments,
			customerCod : this.siptaxiCallCod,
			customerName : customerUpdates.name,
			siptaxiCallId : this.siptaxiCallId,
			siptaxiCallAsteriskUniqueId : this.siptaxiCallAsteriskUniqueId,
			taxiId : "",
			taxiMovil : "",
			taxiPlaca : "",
			agentId : Meteor.userId(),
			agentName : Meteor.user().profile.name,
			comments : "",
			status : 0
		};

		// Actualizamos el Documento del Customer
		Meteor.call('customerUpdate', currentCustomerId, customerUpdates);

		// Creamos el nuevo Servicio
		Meteor.call('servicesNew', newService);

		// Borramos el Registro en PanelCalls
		Meteor.call('panelCallsHangup', currentSiptaxiCallAsteriskUniqueId, function (error, result) {
			if(error){
				console.log('---> UPSsss, No se pudo Borrar el Documento en PANELCALLS ',error, '<---');
				//return;
			}
			//console.log('---> Documento en PANELCALLS BORRADO OK <---');
		});

		// 
	}
});


//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE NEW CUSTOMER++++++++++++++++++++++++++++++++++//
//********************************************************************************//

// TYPEAHEAD MOVIL AND PLACA
Template.templateNewCustomer.rendered = function () {
	$('.inputCustomersNames').typeahead({source:Session.get('allNames')});
	$('.inputCustomersAddressReferences').typeahead({source:Session.get('allAddressReferences')});
};


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

		// almacenamos los IDs de los diferentes Documentos de las Colecciones.
		var currentSiptaxiCallId = this.siptaxiCallId;
		var currentPanelId = this._id;
		var currentSiptaxiCallAsteriskUniqueId = this.siptaxiCallAsteriskUniqueId;

		// Convertimos en MAYUSCULAS
		var currentName = $("#customerName-"+currentPanelId).val();
		var currentAddress = $("#customerAddress-"+currentPanelId).val();
		var currentAddressReference = $("#customerAddressReference-"+currentPanelId).val()
		var currentComments = $("#customerComments-"+currentPanelId).val();
		
		// Objeto con los Datos Update del Customer en Mayusculas
		var customerInsert = {
			name : currentName.toUpperCase(),
			address : currentAddress.toUpperCase(),
			addressReference : currentAddressReference.toUpperCase(),
			comments : currentComments.toUpperCase(),
			phone: this.siptaxiCallPhone,
			cod : this.siptaxiCallCod
		};

		// Objeto con los Datos del Nuevo Servicio
		var newService = {
			customerId : this.customerId,
			customerPhone : this.siptaxiCallPhone,
			customerAdress : customerInsert.address,
			customerAddressReference : customerInsert.addressReference,
			customerComments : customerInsert.comments,
			customerCod : this.siptaxiCallCod,
			customerName : customerInsert.name,
			siptaxiCallId : this.siptaxiCallId,
			siptaxiCallAsteriskUniqueId : this.siptaxiCallAsteriskUniqueId,
			taxiId : "",
			taxiMovil : "",
			taxiPlaca : "",
			agentId : Meteor.userId(),
			agentName : Meteor.user().profile.name,
			comments : "",
			status : 0
		};

		// Insertamos un Nuevo Documento en CUSTOMER
		Meteor.call('customerInsert', customerInsert);

		// Creamos el nuevo Servicio
		Meteor.call('servicesNew', newService);

		// Borramos el Registro en PanelCalls
		Meteor.call('panelCallsHangup', currentSiptaxiCallAsteriskUniqueId, function (error, result) {
		if(error){
			console.log('---> UPSsss, No se pudo Borrar el Documento en PANELCALLS ',error, '<---');
			//return;
		}
		//console.log('---> Documento en PANELCALLS BORRADO OK <---');
	});
	}
});

//------------------------------------------------------------------------------------------
