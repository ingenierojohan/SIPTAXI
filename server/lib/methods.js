// Metodos del Sistema
Meteor.methods({
	// Metodo para Obtener la Hora del Sistema
	getServerTime: function () {
		var time =  moment().format('H:mm:ss')//new Date().getTime();
		//console.log("---> LA HORA DEL SISTEMA ES: ", time);
		return time;
	}
});