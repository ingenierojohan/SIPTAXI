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
