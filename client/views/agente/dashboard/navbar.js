/*Template.navbarAgent.rendered = function () {

};*/


Template.navbarAgent.helpers({
	usernameAgent: function () { 
		var user = Meteor.user();
		return user.profile.name
	},

	horaSistema : function() {return Session.get('horaSistema');},

	newCustomerNotifications : function(){
		return Session.get('newCustomerNotifications');
	},

	customerCodPhone : function(){
		return Session.get('NewCustomerCodPhone');
	}
});


Template.navbarAgent.events({

	'focusout #inputNewCustomerPhone': function(evt, temp){
		var phone = parseInt($("#inputNewCustomerPhone").val());
		evaluatePhone(phone);
	},

	'click #btnNewCustomer': function (evt, temp) {
		evt.preventDefault();

		// Iniciamos en Null las Variables de Session 
		Session.set('newCustomerNotifications', null);
		Session.set('NewCustomerCodPhone', null);

		// Reseteamos Formulario
		$('#formNewCustomer').each(function(){
			this.reset();
		});

		// Inicializamos el Modal
		$('#modalNewCustomer').modal({
			keyboard : true
		});

		// Ocultamos el Boton de Guardar
		$('#btnModalSaveCustomer').attr('disabled', true);
	},

	'click #btnModalSaveCustomer' : function(evt, temp){
		evt.preventDefault();

		var customerData = {
			phone : parseInt($("#inputNewCustomerPhone").val()),
			name : $("#inputNewCustomerName").val().toUpperCase(),
			address : $("#inputNewCustomerAddress").val().toUpperCase(),
			addressReference : $("#inputNewCustomerAddressReference").val().toUpperCase(),
			comments : $("#inputNewCustomerComments").val().toUpperCase(),
			cod : Session.get('NewCustomerCodPhone')
		}

		// Llamamos al Metodo para Crear Nuevo Cliente
		Meteor.call('customerInsert', customerData, function(error, resp){
			if(error){
				showNotificaciones(mapaNotificaciones.guardarClienteError);
			}
			showNotificaciones(mapaNotificaciones.guardarClienteOk);
		});

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
		
		$('#modalNewCustomer').modal('hide');
	}
});

//************************** FUNCIONES DEL TEMPLATE **************************

// Evaluar El Campo Phone y establecer si es un Celular o un Fijo
function evaluatePhone(phone){
	if(phone){
		var countPhone = countDigitsNumber(phone);
		if (countPhone == 7 || countPhone==10){
			var codPhone = phone %100;
			Session.set('NewCustomerCodPhone', codPhone);

			Meteor.call('customersFindPhone', phone, function (error, result) {
				if(error){
					console.log('----ERROR', error)
				}
				if(result){
					$('#btnModalSaveCustomer').attr('disabled', true);
					return Session.set('newCustomerNotifications', {
						alert:"alert alert-error",
						message : "El Número Telefonico YA existe"
					});
					
				}
				$('#btnModalSaveCustomer').attr('disabled', false);
				return Session.set('newCustomerNotifications', {
						alert:"alert alert-success",
						message : "Perfecto... Es un Cliente Nuevo"
					});
			});
			$('#btnModalSaveCustomer').attr('disabled', true);
			return Session.set('newCustomerNotifications',{
				alert:"alert alert-info",
				message:"Validando el Telefono..."});
		}
		else{
			$('#btnModalSaveCustomer').attr('disabled', true);
			return Session.set('newCustomerNotifications',{
				alert:"alert alert-error",
				message:"Debe ser un Telefono Fijo (7 digitos) o Celular (10 Digitos)"
			});
		}
	}
	else{
		$('#btnModalSaveCustomer').attr('disabled', true);
		return Session.set('newCustomerNotifications',{
			alert:"alert alert-error",
			message:"El Telefono esta en Blanco o Contine Letras"
		});
	}
};

