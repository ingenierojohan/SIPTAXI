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
	//-------------------------------------------------------------------------
	
	//-------------------------------------------------------------------------
	// Control de los TypeHead de Nombres , Referencias y Movil-Placa
	Deps.autorun(function () {

		// TYPEAHEAD CUSTOMER NAMES
		var customersNames = CustomersNames.find().fetch();
		var names = _.pluck(customersNames, 'name');
		Session.set('allNames', names);

		//TYPEAHED ADDRESS REFERENCE
		var addressReferences = AddressReferences.find().fetch();
		var address = _.pluck(addressReferences, 'addressReference');
		Session.set('allAddressReferences', address );

		// TYPEAHEAD MOVIL y PLACA
		var taxis = Taxis.find().fetch();
		var typeaheadMovil = _.map(taxis, function(data){
			var movilyPlaca = '"'+data.movil+" -- "+data.placa+'"';
			return movilyPlaca;
		});

		Session.set('movilAndPlaca', typeaheadMovil);
	});


});

/*Deps.autorun(function () {
	notificationsAsterisk.on('newCall', function(dataNewCall){
		console.log ('----> DATA DE NEW CALL <----', dataNewCall);
		//AsteriskCalls.insert(dataNewCall);
		Meteor.call('insertNewCall', dataNewCall, function (error, result) {});
	});
});*/



