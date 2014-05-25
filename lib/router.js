// Configuraciones Generales de iron-router
Router.configure({
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

// Filtros de autentificacion y otros Filtros
var filters = {
	authGeneral : function(pause){
		if (!Meteor.user()) {
			console.log('---> !!! NO ESTOY REGISTRADO !!! ... Vamos para el login <--- ');
			this.render('login');
			pause();
		}
	},

	authAgent : function(pause){
		var user = Meteor.user();
		console.log("---> HOLA SOY -->", user);
		console.log('---> !!! ESTOY REGISTRADO !!!, SOY '+ user.username +', con ROL: '+ user.profile.rol  +' <---');
		if (user.profile.rol == "agent") {
			console.log('---> !!! VAMOS para dashboardAgent <---');
			this.render('dashboardAgent');
			pause();
			return;
		}
		console.log('---> !!! VAMOS para dashboardAdmin !!! <---');
		this.render('dashboardAdmin');
		pause();
	},

	authAdmin : function(pause){
		var user = Meteor.user();
		console.log("---> HOLA SOY -->", user);
		console.log('---> !!! ESTOY REGISTRADO !!!, SOY '+ user.username +', con ROL: '+ user.profile.rol  +' <---');
		if (user.profile.rol == "admin") {
			console.log('---> LO SIENTO.... NO TIENE PERMISO PARA ESTAR AQUI !!! VAMOS para dashboardAdmin <---');
			this.render();
			pause();
			return;
		}
		console.log('---> LO SIENTO.... NO TIENE PERMISO PARA ESTAR AQUI !!! VAMOS para dashboardAgent!!! <---');
		this.render('dashboardAgent');
		pause();
	}
};


// Mapeado de Rutas
Router.map(function() {

	// Ruta para Login
	this.route('login', {
		path: '/',
		onBeforeAction: [filters.authGeneral, filters.authAgent, filters.authAgent]
	});

	this.route('dashboardAgent', {
		onBeforeAction: [filters.authGeneral, filters.authAgent]
	});

	this.route('dashboardAdmin', {
		onBeforeAction: [filters.authGeneral, filters.authAdmin]
	});
});
