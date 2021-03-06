/*Meteor.publish('panelCalls', function(options) {
	return AsteriskCalls.find({}, options);
});*/

Meteor.publish('panelCalls', function() {
	return PanelCalls.find();
});

Meteor.publish('addressReferences', function() {
	console.log('---> SE HAN SUSCRITO A AddressReferences <---');
	return AddressReferences.find();
});

Meteor.publish('customersNames', function() {
	//return CustomersNames.find({},{fields:{name:1}});
	console.log('---> SE HAN SUSCRITO A CustomersNames <---');
	return CustomersNames.find();
});

// Publicamos los servicios cuyo status es 0=pendiente, 1=asigando
Meteor.publish('servicesActual', function(){
	console.log('SE HAN SUSCRITO A SERVICES ACTUAL');
	return Services.find({ status: { $in:[0,1] } } );
});

// Publicamos los servicios del Dia, contados desde las 00:00 del dia en curso
Meteor.publish('servicesDay', function(){
	console.log('---> SE HAN SUSCRITO A SERVICES DAY <---');
	var now = new Date().getTime();
	var day = moment(now).format('YYYY-MM-DD 00:00:00');
	var dayTimestamp = new Date(day).getTime();
	return Services.find( { timeLaunch : { $gt: dayTimestamp } } );
});

// Publicamos solo los Moviles y las Placas
Meteor.publish('movilAndPlaca', function(){
	console.log('---> SE HAN SUSCRITO A TAXIS <---\n\n');
	return Taxis.find( { status:0 }, { fields : { movil:1, placa:1 } } );
});


//---------------------------------------------------------------------------------------------------
console.log ('\n---> Cantidad de Usuarios Creados =', Meteor.users.find().count());
console.log ('---> Numero de Documentos en la Coleccion asteriskCalls =', AsteriskCalls.find().count());
console.log ('---> Numero de Documentos en la Coleccion customers =', Customers.find().count());
console.log ('---> Numero de Documentos en la Coleccion customersNames =', CustomersNames.find().count());
console.log ('---> Numero de Documentos en la Coleccion addressReference =', AddressReferences.find().count());
console.log ('---> Numero de Documentos en la Coleccion taxis =', Taxis.find().count());
console.log ('---> Numero de Documentos en la Coleccion services =', Services.find().count());
console.log ('---> Numero de Documentos en la Coleccion panelCalls =', PanelCalls.find().count());
console.log ('---> Numero de Documentos en la Coleccion siptaxiCalls =', SiptaxiCalls.find().count(),'\n');
//---------------------------------------------------------------------------------------------------