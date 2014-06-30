//********************************************************************************//
//++++++++++++++++++++++TEMPLATE SERVICE ACTUAL ++++++++++++++++++++++++++++++++++//
//********************************************************************************//

// LISTAMOS TODOS LOS SERVICIOS con status 0=Pendiente 1=Asigando
Template.panelServicesActual.servicesActual = function(){
	return Services.find({ status: { $in:[0,1] } }, {sort:{timeLaunch:-1}} );
};

//********************************************************************************//
//+++++++++++++++++++++TEMPLATE SERVICE ACTUAL ROW++++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.servicesActualRow.rendered = function () {
	$('.typeaheadCustomerName').typeahead({source:Session.get('typeaheadCustomerName')});
};




//*********************** HELPERS ****************************************
Template.servicesActualRow.helpers({

	serviceRowStatus : function(){
		var status = {};

		if(this.wasReallocate){
			// REASIGNADO
			status.rowColor = '';
			status.estadoColor = 'label-inverse';
			status.estadoText	= 'REASIGNADO';
			return status;
		}

		if(this.status===0){
			// PENDIENTE
			status.rowColor = 'warning';
			status.estadoColor = 'label-warning';
			status.estadoText	= 'PENDIENTE';
			return status;
		}
		// ASIGNADO
		status.rowColor = 'info';
		status.estadoColor = 'label-info';
		status.estadoText	= 'ASIGNADO';
		return status;
	},

	// HORA DE LANZAMIENTO
	serviceRowTimeLaunch : function(){
		var time = this.timeLaunch;
		return moment(time).format('HH:mm:ss');
	},

	//HORA DE ASIGANCION o ReAsignacion
	serviceRowTimeAllocate : function(){
		if(this.timeAllocate){
			var time=0;
			if(this.wasReallocate)
				time = this.timeReallocate;
			else
				time = this.timeAllocate
			return moment(time).format('HH:mm:ss');
		}
	},

	// TYPEAHEAD MOVIL Y PLACA
	movilYplaca :function(){
		var todos = Session.get('movilAndPlaca');
		//console.log('TODOS=',todos);
		return todos;
		//return Taxis.find();
	},

	// SHOW BOTONES DEPENDIENDO DE SU ESTATUS
	btnPendiente : function(){
		if(this.status===0){
			return true;
		}
		return false;
	}
});

//*********************** EVENTOS ****************************************
Template.servicesActualRow.events({

	// Cuando se Presiona Enter en los Inputs Nombre, Direccion, Reference, Notas Cliente y Notas Servicio
	'keyup :input.panel-services-inputs' : function(evt, temp){
		if (evt.which === 13){
			updateCustomer(this);
		}
	},

	// Cuando se Presiona Enter en los Moviles
	'keyup :input.panel-services-inputs-movil' : function(evt, temp){
		if (evt.which === 13){
			allocateService(this);
		}
	},

	//EVENTO BTN ASIGNAR
	'click #btnAsignar' : function(evt, temp){
		evt.preventDefault();
		allocateService(this);
	},

	//EVENTO BTN REASIGNAR
	'click #btnReasignar' : function(evt, temp){
		evt.preventDefault();

		var currentServiceId = this._id;

		//DATOS MOVIL REALLOCATE
		var reallocateService = {
					reallocateTaxiId : this.taxiId,
					reallocateMovil : this.taxiMovil,
					reallocatePlaca : this.taxiPlaca,
					wasReallocate : true
		};
		
		$('#RAModal-'+currentServiceId).modal({
			keyboard: true
		});
		// Click Al Boton Reasignar del MODAL
		$('#btnRAModal-'+currentServiceId).click(function(evt, temp){
			evt.preventDefault();

			var currentMovil = $("#RAmodalMovil-"+currentServiceId).val();
			var reallocateReason = $("#RAmodalReason-"+currentServiceId).val().toUpperCase();
	
			if (currentMovil != ''){
				var movil = currentMovil.substring(3,0);
				var placa = currentMovil.substring(7);
				console.log('----MODAL MOVIL ACTUAL--- ', movil);
				console.log('----MODAL PLACA ACTUAL--- ', placa);
				var currentTaxi = Taxis.findOne({movil:movil});
		
				if (!currentTaxi){
					return console.log('---POR FAVOR SELECCIONE UN MOVIL DE LA LISTA DEL MODAL---');
				}
				console.log('----TAXI MODAL---', currentTaxi);
				
				// Objeto con los Datos del Servicio Asignado
				reallocateService.taxiId = currentTaxi._id,
				reallocateService.taxiMovil = currentTaxi.movil,
				reallocateService.taxiPlaca = currentTaxi.placa,
				reallocateService.reallocateReason = reallocateReason

				// ACTUALIZAMOS EL DOCUMENTOS SERVICE
				Meteor.call('servicesReAllocate',currentServiceId, reallocateService, function(err, resp){
					if(err){
						showNotificaciones(mapaNotificaciones.serviceReallocateError);
					}
					showNotificaciones(mapaNotificaciones.serviceReallocateOk);
				});
			}

			else {
				console.log('----ALERTA MOVIL NO SELECCIONADO EN MODAL--- ', currentMovil);
			}

			$('#RAModal-'+currentServiceId).modal('hide');
		});
	},

	//BTN OK
	'click #btnFinalizar' : function(evt, temp){
		evt.preventDefault();
		var currentServiceId = this._id;
		// ACTUALIZAMOS EL DOCUMENTO SERVICE
		Meteor.call('servicesPickup',currentServiceId, function(error, resp){
			if(error){
				showNotificaciones(mapaNotificaciones.servicePickupError);
			}
			showNotificaciones(mapaNotificaciones.servicePickupOk);
		});
	},

	// BTN CANCELAR
	'click #btnCancelar' : function(evt, temp){
		evt.preventDefault();
		var currentServiceId = this._id;
		$('#CAModal-'+currentServiceId).modal({
			keyboard: true,
		});
		$('#btnCAModal-'+currentServiceId).click(function(evt, temp){
			evt.preventDefault();
			var cancelServiceReason = $("#CAmodalReason-"+currentServiceId).val().toUpperCase();
			Meteor.call('servicesCancel',currentServiceId, cancelServiceReason, function(error, resp){
				if(error){
					showNotificaciones(mapaNotificaciones.serviceCancelError);
				}
				showNotificaciones(mapaNotificaciones.serviceCancelOk);
			});

			$('#CAModal-'+currentServiceId).modal('hide');

		});
	},
});


//*********************** FUNCIONES ****************************************

// Funcion para Actualizar Datos del Cliente
function updateCustomer (data){
	var currentServiceId = data._id;
	
	var	customerPhone = data.customerPhone;
	var customerData = {
		name : $("#customerName-"+currentServiceId).val().toUpperCase(),
		address : $("#customerAddress-"+currentServiceId).val().toUpperCase(),
		addressReference : $("#customerAddressReference-"+currentServiceId).val().toUpperCase(),
		comments : $("#customerComments-"+currentServiceId).val().toUpperCase(),
	};
	console.log('-----service customer data=', customerData);

	Meteor.call('customerUpdateByPhone', customerPhone, customerData, function(err, resp){
		if(err){
			showNotificaciones(mapaNotificaciones.guardarClienteError);
		}
		showNotificaciones(mapaNotificaciones.guardarClienteOk);
	});

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
	
	var serviceData ={
		customerName : customerData.name,
		customerAddress : customerData.address,
		customerAddressReference : customerData.addressReference,
		customerComments : customerData.comments,
		comments: $("#serviceComments-"+currentServiceId).val().toUpperCase()
	}

	Meteor.call('servicesUpdate', currentServiceId, serviceData,  function (error, result) {});

};

// Funcion Para Validar el Movil
function validateMovil (currentServiceId){

	var currentMovil = $("#movil-"+currentServiceId).val();
	if (currentMovil !=''){
			var movil = currentMovil.substring(3,0);
			var placa = currentMovil.substring(7);
			console.log('----MOVIL ACTUAL--- ', movil);
			console.log('----PLACA ACTUAL--- ', placa);
			var currentTaxi = Taxis.findOne({movil:movil});

			if (!currentTaxi){
				console.log('---POR FAVOR SELECCIONE UN MOVIL DE LA LISTA---');
				showNotificaciones(mapaNotificaciones.movilNoEncontrado);
				return null;
			}
		console.log('----TAXI---',currentTaxi);
		return currentTaxi;
	}
	console.log('----ALERTA MOVIL NO SELECCIONADO--- ', currentMovil);
	showNotificaciones(mapaNotificaciones.movilNoSelecionado);
	return null;
};


// Funcion para ASIGANR EL SERVICIO
function allocateService (data){
	var currentServiceId = data._id;
	var currentMovil = validateMovil(currentServiceId);
	if (currentMovil){
		updateCustomer(data);
		var allocateService = {
			taxiId : currentMovil._id,
			taxiMovil : currentMovil.movil,
			taxiPlaca : currentMovil.placa,
			status : 1
		};
			// ACTUALIZAMOS EL DOCUMENTOS SERVICE
			Meteor.call('servicesAllocate', currentServiceId, allocateService, function (error, result) {
				if(error){
					showNotificaciones(mapaNotificaciones.serviceAllocateError);
				}
				showNotificaciones(mapaNotificaciones.serviceAllocateOk);
			});
	}
};
