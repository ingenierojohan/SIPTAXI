// FUnciones Iniciales del Sistema
Meteor.startup( function () {

	// Metodo para Obtener la Hora del Server
	Meteor.setInterval( function (){
		Meteor.call('getServerTime', function (error, result) {
			Session.set('horaSistema', result);
		});
	},1000)

	// Limpiamos todas las Alertas despues de un reload
	console.log( "---> ESTAMOS LISTOS <---" );
	loginMessages.defaultAgent();

});

/*Deps.autorun(function () {
	notificationsAsterisk.on('newCall', function(dataNewCall){
		console.log ('----> DATA DE NEW CALL <----', dataNewCall);
		//AsteriskCalls.insert(dataNewCall);
		Meteor.call('insertNewCall', dataNewCall, function (error, result) {});
	});
});*/

Deps.autorun(function () {

	var customersNames = CustomersNames.find().fetch();
	var names = _.pluck(customersNames, 'name');
	Session.set('allNames', names);

	var addressReferences = AddressReferences.find().fetch();
	var address = _.pluck(addressReferences, 'addressReference');
	Session.set('allAddressReferences', address );


	Meteor.subscribe('addressReferences');
	Meteor.subscribe('customersNames');

});

Meteor.subscribe('panelCalls');

