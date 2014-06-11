Template.dashboardAgent.events({
	'click #btnSalir': function(e) {
		e.preventDefault();
		Meteor.logout();
		Router.go('/');
	}
});

/*Template.templateCustomer.rendered = function () {
	$('.inputCustomersNames').typeahead({source:Session.get('allNames')});
	$('.inputCustomersAddressReferences').typeahead({source:Session.get('allAddressReferences')});
};*/

