/*Meteor.publish('panelCalls', function(options) {
	return AsteriskCalls.find({}, options);
});*/

Meteor.publish('panelCalls', function() {
	return PanelCalls.find();
});

Meteor.publish('addressReferences', function() {
	return AddressReferences.find();
});

Meteor.publish('customersNames', function() {
	return CustomersNames.find({},{fields:{name:1}});
});

Meteor.publish('servicesActual', function(){
	console.log('SE HAN SUSCRITO A SERVICES ACTUAL');
	return Services.find({ status: { $in:[0,1] } } );
});

Meteor.publish('servicesDay', function(){
	console.log('---> SE HAN SUSCTRITO A SERVICES DAY <---');
	var now = new Date().getTime();
	var day = moment(now).format('YYYY-MM-DD 00:00:00');
	var dayTimestamp = new Date(day).getTime();
	return Services.find( { timeLaunch : { $gt: dayTimestamp } } );
});

// Publicamos solo los Moviles y las Placas
Meteor.publish('movilAndPlaca', function(){
	console.log('---> SE HAN SUSCRITO A TAXIS <---');
	return Taxis.find( { status:0 }, { fields : { movil:1, placa:1 } } );
})