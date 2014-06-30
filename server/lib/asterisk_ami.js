// Inicializacion del Asterisk Manager
ami = new (Meteor.require('asterisk-manager'))
	('5038'			// port
	,'localhost'		// host
	,'admin_mgr'	// username VM
	,'QE6HRM'		// password VM
	//,'admin_mgr'	// username COOTRANCEJA
	//,'L7J6N7'		// password COOTRANCEJA
	,true );			// This parameter determines whether events are emited.

// Libreria  Fiber-Future para uso de llamadas sincronas
//Future = Meteor.require('fibers/future');