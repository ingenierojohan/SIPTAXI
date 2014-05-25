# SIPTAXI --- Sistema de Despacho de Servicios de Taxis 
# Version : 1.0
# Fecha : 2014-05-03
# Desarrollado : Ing Johan Ramirez

#Requiere de Modulos NODE.js
NPM >>> npm install asterisk-manager	--- Libreria para interactuar con Asterisk AMI (Agregar en Packages.json)
								en packages.json
									 {
											"asterisk-manager":"0.1.7"
										}

# Require Modulos Menteor Oficiales
meteor add accounts-base			--- Gestion de Usuarios En Meteor
meteor add accounts-password	--- Gestion por medio de Password
meteor add bootstrap			--- Framework css

#Requiere Modulos METEOR extraidos desde Atmosphere
mrt add npm					--- Integracion con NPM
mrt add streams				--- Libreria para Emitir Notificaciones en Meteor (Agragar en smart.json)
mrt add iron-router			--- Modulo para gestionar Rutas en Meteor
mrt add iron-router-progress 			--- Efecto Carga de Barra Superior como en youtube.
mrt add spin				Efecto de Carga de datos spinner
mrt add moment			Manejador de Fechas y Horas
mrt add autocompletion			Forma de Autocompletar campor con info de una coleccion




#Modulos Meteor para Remover
mrt remove insecure 			---- Sincronizacion de colecciones full con el Cliente.
mrt remove autopublish


# Tips
	#Cambiar el Idioma a Moment.js
		cd /root/.meteorite/packages/moment..... agregar en packages.js
		api.add_files('lib/moment/lang/es.js', 'client');

