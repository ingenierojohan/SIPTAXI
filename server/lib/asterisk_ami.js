// Inicializacion del Asterisk Manager
ami = new (Meteor.require('asterisk-manager'))
	('5038'			// port
	,'localhost'		// host
	,'admin_mgr'	// username
	,'QE6HRM'		// password
	,true );			// This parameter determines whether events are emited.

// Libreria  Fiber-Future para uso de llamadas sincronas
//Future = Meteor.require('fibers/future');