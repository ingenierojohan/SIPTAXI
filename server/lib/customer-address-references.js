// Metodos de la Coleccion
Meteor.methods({
	customersAddressReferenceInsert:function(data){
		var addressReference = {addressReference:data}
		AddressReferences.insert(addressReference);
	}
});