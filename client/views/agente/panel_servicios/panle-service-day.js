/*Template.panelServicesDay.rendered = function () {
	var table = $('#tableServicesDay').DataTable({
		"columns":[
			{	
				"orderable": false
			}
		]
	});*/

/*	var _watch = Services.find();
	var handle = _watch.observe({
		addedAt : function(doc, atIndex){
			console.log('---ServicesDAY row ',atIndex,doc);
			//table.row.add([doc.status, doc.customerName,doc.coda]).draw();

			table.row.add(
				{
					"status":doc.status,
					"customerName":doc.customerName,
					"taxiMovil":doc.taxiMovil
				}
			).draw();
			
		},
		changedAt : function(newDoc, oldDoc, atIndex) {
			console.log('CHANGEDAT-NEWDOC=',newDoc);
			console.log('CHANGEDAT-OLDDOC=',oldDoc);
			console.log('CHANGEDAT-ATINDEX=',atIndex);
			table.row(atIndex).data([newDoc.status,newDoc.customerName,newDoc.taxiMovil]).draw();
		}
		removeAt : function(oldDoc, atIndex){
			console.log('REMOVEAT-oldDOC=',newDoc);
			console.log('REMOVEAT-atindex=',atIndex);
			table.row(atIndex).remove().draw();
		}
	});
};*/

/*function mapData (doc){
	var newRow = _.map(doc,function(value, key){
		console.log('KEY=',key);
		console.log('VALUE=',value);
		return value
	});
	
	console.log("------> MAP ADD",newRow);
	return newRow;
}*/

//********************************************************************************//
//++++++++++++++++++++++TEMPLATE PANEL SERVICES DAY ++++++++++++++++++++++++++++++//
//********************************************************************************//

Template.panelServicesDay.servicesDay = function(){
	return Services.find({}, {sort:{timeLaunch:-1}});
}


// HELPERS
Template.panelServicesDay.helpers({
	serviceRowStatus : function(){
		var status = {};

		if(this.wasReallocate){
			// REASIGNADO
			status.rowColor = '';
			status.estadoColor = 'label-inverse';
			status.estadoText	= 'REASIGNADO';
			
			// Time Reasigando
			status.timeAllocate = moment(this.timeReallocate).format('HH:mm:ss');
			status.timeAllocateFull = moment(this.timeReallocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');
			if (this.status==2){
				status.timeFinal = moment(this.timePickup).format('HH:mm:ss');
				status.timeFinalFull = moment(this.timePickup).format('dddd, MMMM DD YYYY -- HH:mm:ss');
			}
			else{
				status.timeFinal = ""
				status.timeFinalFull = ""
			}
			return status;
		}

		switch(this.status){
			case 0:
				// PENDIENTE
				status.rowColor = 'warning';
				status.estadoColor = 'label-warning';
				status.estadoText	= 'PENDIENTE';
				//status.timeAllocate = moment(this.timeAllocate).format('HH:mm:ss');
				//status.timeAllocateFull = moment(this.timeAllocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				status.timeAllocate = "";
				status.timeAllocate = "";
				status.timeFinal = "";
				status.timeFinalFull = "";
				break;
		
			case 1:
				// ASIGNADO
				status.rowColor = 'info';
				status.estadoColor = 'label-info';
				status.estadoText	= 'ASIGNADO';
				
				status.timeAllocate = moment(this.timeAllocate).format('HH:mm:ss');
				status.timeAllocateFull = moment(this.timeAllocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				status.timeFinal = "";
				status.timeFinalFull = "";
				break;

			case 2:
				// FINALIZADO
				status.rowColor = 'success';
				status.estadoColor = 'label-success';
				status.estadoText = 'FINALIZADO';
				// Time Pickup
				status.timeAllocate = moment(this.timeAllocate).format('HH:mm:ss');
				status.timeAllocateFull = moment(this.timeAllocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				status.timeFinal = moment(this.timePickup).format('HH:mm:ss');
				status.timeFinalFull = moment(this.timePickup).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				break;

			case 3:
				// CANCELADO
				status.rowColor = 'error';
				status.estadoColor = 'label-important';
				status.estadoText = 'CANCELADO';
				// Time Cancel
				status.timeAllocate = moment(this.timeAllocate).format('HH:mm:ss');
				status.timeAllocateFull = moment(this.timeAllocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				status.timeFinal = moment(this.timeCancel).format('HH:mm:ss');
				status.timeFull = moment(this.timeCancel).format('dddd, MMMM DD YYYY -- HH:mm:ss');
				break;
		}
		return status;
	},

	serviceRowTime: function(){
		var times = {}
		times.timeLaunch = moment(this.timeLaunch).format('HH:mm:ss');
		times.timeLaunchFull = moment(this.timeLaunch).format('dddd, MMMM DD YYYY -- HH:mm:ss');
		
		times.timeAllocate = moment(this.timeAllocate).format('HH:mm:ss');
		times.timeAllocateFull = moment(this.timeAllocate).format('dddd, MMMM DD YYYY -- HH:mm:ss');

		return times;
	}
});		// FIN HELPER