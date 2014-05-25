Template.navbarAgent.helpers({
	usernameAgent: function () { 
		var user = Meteor.user();
		return user.profile.name
	},

	horaSistema : function() {return Session.get('horaSistema');}
});