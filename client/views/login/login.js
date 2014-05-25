
// Eventos Template
Template.login.events({
	'submit #formAgent' : function(evt,temp){
		evt.preventDefault();

		var inputUsernameAgent = temp.find("#inputUsernameAgent").value;
		var inputPasswordAgent = temp.find("#inputPasswordAgent").value;
		var selectExtension = $("#selectExtension option:selected").text();
		console.log("SU USUARIO =", inputUsernameAgent, "  SU CLAVE =",inputPasswordAgent, "  EXTENSION=", selectExtension);

		Meteor.loginWithPassword(inputUsernameAgent, inputPasswordAgent, function(err){
			if(err){
				console.log("---> !!! LOGIN ERROR !!! = ", err);
				// Llamamos a la Funcion Manejadora de ERRORES
				loginMessages.errorLogin(err);
			}
			else {
				console.log("---> YUPIIIII !!! LOGIN CORRECTO !!! <---");

				var user = Meteor.user();
				if (user.profile.rol == 'agent'){
					loginMessages.defaultAgent();		// Inicializamos la Variable de Session
				}
				else {
					console.log('---> :( !!! USTED NO ES UNA AGENTE!!! <...');
					loginMessages.notAgent();
					Meteor.logout();
				}
			}
			return false;
		});
	},

	'submit #formAdmin' : function(evt,temp){
		evt.preventDefault();

		var inputUsernameAdmin = temp.find("#inputUsernameAdmin").value;
		var inputPasswordAdmin = temp.find("#inputPasswordAdmin").value;
		console.log("SU USUARIO =", inputUsernameAdmin, "  SU CLAVE =",inputPasswordAdmin);

		Meteor.loginWithPassword(inputUsernameAdmin, inputPasswordAdmin, function(err){
			if(err){
				console.log("---> !!! LOGIN ERROR !!! = ", err);
				// Llamamos a la Funcion Manejadora de ERRORES
				loginMessages.errorLogin(err);
			}
			else {
				console.log("---> YUPIIIII !!! LOGIN CORRECTO !!! <---");
				var user = Meteor.user();
				if (user.profile.rol == 'admin'){
					loginMessages.defaultAdmin();		// Inicializamos la Variable de Session
				}
				else {
					console.log('---> :( !!! USTED NO ES UNA ADMINISTRADOR !!! <...');
					loginMessages.notAdmin();
					Meteor.logout();
				}
			}
			return false;
		});
	},

	// Helper para Saber Cual tab esta Activo
	'click #liTabAgent' : function(evt, temp){
		evt.preventDefault();
		console.log('---> ESTAMOS en FORM AGENTE <---');
		limpiarForms(temp);
		loginMessages.defaultAgent();
	},

	'click #liTabAdmin' : function(evt, temp){
		evt.preventDefault();
		console.log('---> ESTAMOS en FORM ADMIN <---');
		limpiarForms(temp);
		loginMessages.defaultAdmin();
	}

});

// Manejador de Helpers
Template.login.helpers({
	loginAlert : function(){return Session.get('loginAlert');;},
});

// Manejador de Mensajes
loginMessages = {
	defaultAgent : function(){
		Session.set('loginAlert', { 
			alert: 'alert-info',
			title : 'Bienvenido Agente de la Base de Taxis',
			message : '---> Por Favor Ingrese Su Usuario , Clave y Extensíon  <---'
		});
	},
	defaultAdmin : function(){
		Session.set('loginAlert', { 
			alert: 'alert-warning',
			title : 'Bienvenido Administrador',
			message : '---> Por Favor Ingrese Su Usuario , Clave  <---'
		});
	},
	errorLogin : function(err) {
		if(err.error === 403){
			if(err.reason == "User not found"){
				Session.set('loginAlert', { 
					alert: 'alert-error',
					title : 'EL USUARIO NO EXISTE',
					message : '---> EL Usuario Ingresado No existe Actualmente ... Por Favor Intente de Nuevo<---'
				});
			}
			else {
				Session.set('loginAlert', { 
					alert: 'alert-error',
					title : 'CLAVE INCORRECTA',
					message : '---> La Clave Proporcionada No es Valida ... Por Favor Intente de Nuevo <---'
				});
			}
		}
		else{
			Session.set('loginAlert', { 
				alert: 'alert-error',
				title : 'INGRESE LOS DATOS ',
				message : '---> Por Favor Ingrese Su Usuario , Clave y Extensíon  <---'
			});
		}
	}, //Fin errorLogin

	notAdmin : function(){
		Session.set('loginAlert', { 
			alert: 'alert-warning',
			title : '!!! Ups NO ERES ADMINISTRADOR !!!',
			message : '---> Por Favor Ve al Registro de los Agentes <---'
		});
	},

	notAgent : function(){
		Session.set('loginAlert', { 
			alert: 'alert-warning',
			title : '!!! Ups NO ERES UN AGENTE !!!',
			message : '---> Por Favor Ve al Registro de los Administradores <---'
		});
	},
}

// Limpiar Forms
var limpiarForms = function(data){
	$("#formAdmin :input").each(function(){ $(this).val('') });
	$("#formAgent :input").each(function(){ $(this).val('') });
};

/*
// Cuado la Pagina este Lista
$( document ).ready(function() {
	console.log( "---> ESTAMOS LISTOS <---" );
	loginMessages.defaultAgent();
});

*/