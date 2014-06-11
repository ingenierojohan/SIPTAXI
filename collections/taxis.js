// Coleccion de los Taxis
Taxis = new Meteor.Collection('taxis');

/*****************************************************************************************
MAPA de la Coleccion
------------------------------------------------------------------------------------------
id : "string"	--->	id del documento
createdAt : "timestamp"	--->	Hora y Fecha de  Creacion del Documeto
contac : "string"	--->	"celular o Direccion del Taxista"
drivers : "array"	--->	conductores del Taxi
features : "string"	-->	Caracteristicas del Taxi, con Maleta, etc
marca : "string"	--->	Marca del Taxi
movil : "string"	--->	Numero del Movil
ower : "string"	---> Dueño del Taxi
placa : "string"	---> Placa del Taxi
status : "int32"
	0 = habilitado
	1 = suspendido

------------------------------------------------------------------------------------------
******************************************************************************************/







/*// Formato de Inicializacion de la Coleccion
if(Taxis.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento
	var movil = '123';		// Identificacion del Movil o Taxi
	var placa = 'TTT999';		// Placa del Taxi
	var marca = 'RENOL';		// Marca del Taxi
	var features = 'Tiene Maletas';		// Caracteristicas del Taxi
	var drivers = ["Pacho", "NANO"];		// Conductores del taxi
	var owner = "JAIME";		// propietario
	var status = 0;		// Status del Taxi [ 0 = Habilitado, Sansionado = 1 ]
	var contact = "celular o Direccion del Taxista";
	var createdAt = new Date().getTime();

	var newTaxi = {
		_id : id,
		createdAt: createdAt,
		contact : contact,
		drivers : drivers,
		features : features,
		marca : marca,
		movil : movil,
		owner : owner,
		placa : placa,
		status : status
	};

	var insertTaxi = Taxis.insert(newTaxi);
		console.log('---> taxis --PRIMER TAXI REGISTRADO id = ', insertTaxi, '<---\n');
}

//----------------------------------------------------------------------------------------------*/