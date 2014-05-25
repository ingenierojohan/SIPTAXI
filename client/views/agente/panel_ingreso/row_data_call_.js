//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE ROWDATACALL+++++++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.rowDataCall.helpers({
/*	cod: function () {
		var phone = this.siptaxiCallPhone.toString()[2];
		var phone2 = this.siptaxiCallPhone % 100;
		console.log ('-------- SOY COD =', phone,'-------',phone2);
		return phone;
	}*/
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
									Movil: '+ services[key].taxiMovil +'<br>\
									Placa: '+ services[key].taxiPlaca +'<br>\
									Agente: '+ services[key].agentName +'<br>\
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
/*
	// Evento para Autocompletar --- Address Reference ---
	'keyup input.inputCustomersAddressReferences' : function(){
		AutoCompletion.autocomplete({
			element : '.inputCustomersAddressReferences',
			collection : AddressReferences,
			field : 'addressReference',
			limit : 7
		});
	},

	// Evento para Autocompletar --- Customer Name ---
	'keyup input.inputCustomersNames' : function(){
		AutoCompletion.autocomplete({
			element : '.inputCustomersNames',
			collection : CustomersNames,
			field : 'name',
			limit : 7
		});
	}*/
});

Template.templateCustomer.rendered = function () {
	//AutoCompletion.init("input.insearchAddress","input#searchCustomerNames");
	//AutoCompletion.init("input#searchCustomersNames");

	//
	$('.inputCustomersNames').typeahead({source:Session.get('allNames')});
	$('.inputCustomersAddressReferences').typeahead({source:Session.get('allAddressReferences')});
	$('.inputCustomersComments').mask("-99?h # 99-99");
};







//********************************************************************************//
//+++++++++++++++++++++++++TEMPLATE NEW CUSTOMER++++++++++++++++++++++++++++++++++//
//********************************************************************************//

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

	}
});

//------------------------------------------------------------------------------------------
