// Coleccion de los Clientes
Customers = new Meteor.Collection('customers');

/*****************************************************************************************
MAPA de la Coleccion
------------------------------------------------------------------------------------------
_id : "string"	--->	id del documento
phone : "int32"	--->	Telefono del Cliente
name : "string"	--->	Nombre del Cliente
address : "string"	--->	Direccion del Cliente
addressReference : "string"	--->	Una Referencia de la Direccion (barrio, sitio)
cod : "int32"	--->	Codigo del Cliente, los 2 ultimos Digitos del Telefono
comments : "string"	---> Comentario Relacionado con el Cliente
createdAt	: "timestamp"	---> Hora y Fecha de Creacion del Documento 
------------------------------------------------------------------------------------------
******************************************************************************************/










/*// Formato de Inicializacion de la Coleccion
if(Customers.find().count() === 0) {
	var id = new Meteor.Collection.ObjectID();		// Id del documento
	var phone = '6049999';		// Telefono del Cliente
	var cod = '99';		// Codigo del Cliente, Ultimos 2 Numeros del Telefono
	var name = 'Johan';		// 
	var address = "CRA 21 37 28";		// Direccion en ese Formato
	var addressReference = 'el Tablazo';		// Referencia o Barrio de la Direccion
	var addressComments = "Taxi de don Pacho";		// Comentarios o notas de la direccion
	var createdAt = new Date().getTime();

	var newCustomer = {
		_id : id,
		address: address,
		addressComments : addressComments,
		addressReference : addressReference,
		cod : cod,
		createdAt : createdAt,
		names : names,
		phone : phone
	};

	var insertCustomer = Customers.insert(newCustomer);
		console.log('---> customers --PRIMER USUARIO REGISTRADO id = ', insertCall, '<---\n');
}
//----------------------------------------------------------------------------------------------*/