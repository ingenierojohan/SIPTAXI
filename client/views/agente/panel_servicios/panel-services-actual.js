//********************************************************************************//
//++++++++++++++++++++++TEMPLATE SERVICE ACTUAL ++++++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.panelServicesActual.servicesActual = function(){
	return Services.find({ status: { $in:[0,1] } } );
};

//********************************************************************************//
//+++++++++++++++++++++TEMPLATE SERVICE ACTUAL ROW++++++++++++++++++++++++++++++++//
//********************************************************************************//

// TYPEAHEAD MOVIL AND PLACA
/*Template.servicesActualRow.rendered = function () {
	//$('.inputMovilAndPlaca').typeahead({source:Session.get('movilAndPlaca')});
	//$('#movil-placa').select2();
};*/

Template.servicesActualRow.helpers({

	serviceRowStatus : function(){
		var status = {};

		if(this.wasReallocate){
			// REASIGNADO
			status.rowColor = '';
			status.estadoColor = 'label-inverse';
			status.estadoText	= 'REASIGNADO';
			return status;
		}

		if(this.status===0){
			// PENDIENTE
			status.rowColor = 'warning';
			status.estadoColor = 'label-warning';
			status.estadoText	= 'PENDIENTE';
			return status;
		}
		// ASIGNADO
		status.rowColor = 'info';
		status.estadoColor = 'label-info';
		status.estadoText	= 'ASIGNADO';
		return status;
	},

	// HORA DE LANZAMIENTO
	serviceRowTimeLaunch : function(){
		var time = this.timeLaunch;
		return moment(time).format('HH:mm:ss');
	},

	//HORA DE ASIGANCION
	serviceRowTimeAllocate : function(){
		if(this.timeAllocate){
			var time = this.timeAllocate;
			return moment(time).format('HH:mm:ss');
		}
	},

	// TYPEAHEAD MOVIL Y PLACA
	movilYplaca :function(){
		var todos = Session.get('movilAndPlaca');
		//console.log('TODOS=',todos);
		return todos;
		//return Taxis.find();
	},

	// SHOW BOTONES DEPENDIENDO DE SU ESTATUS
	btnPendiente : function(){
		if(this.status===0){
			return true;
		}
		return false;
	}
});

