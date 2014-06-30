// Si no Existen los Taxis Los Inicializamos
if (Taxis.find().count() === 0) {

	console.log('---------->>> CREANDO FIXTURE DE TAXIS <<<----------')
	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "BLANDON USMA NORBEY ARMANDO",
		driver: "",
		movil : "002",
		placa:"SZQ985",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "TABARES OCAMPO JUAN JOSE",
		driver: "GARCIA ARANZAZU JOSE LIBARDO",
		movil : "003",
		placa:"SKR381",
		marca : "CHEVROLET",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "GALLEGO SUAREZ GABRIEL ANTONIO",
		driver: "OSPINA GAVIRIA WILLIAM DE JESUS",
		movil : "005",
		placa:"TTT140",
		marca : "RENAULT",
		modelo : "2014",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "LÓPEZ MEJIA OMAR EVELIO",
		driver: "ALVAREZ MALDONADO JHON JAIRO ",
		movil : "006",
		placa:"TOA945",
		marca : "RENAULT",
		modelo : "1992",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "FLOREZ LÓPEZ MARIA ISABEL",
		driver: "VALLEJO CARDONA JAIME DE JESUS",
		movil : "007",
		placa:"WNE316",
		marca : "RENAULT",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "ACEVEDO RAMIREZ LUIS HERNANDO",
		driver: "VALDERRAMA RUIS HENRY",
		movil : "009",
		placa:"WNE702",
		marca : "RENAULT",
		modelo : "1994",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "VALENCIA ALVAREZ EDISON FERNANDO",
		driver: "",
		movil : "100",
		placa:"WND563",
		marca : "RENAULT",
		modelo : "1991",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "BEDOYA BEDOYA ROBERT NELSON",
		driver: "",
		movil : "101",
		placa:"SKR341",
		marca : "CHEVROLET",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "CORREA OCAMPO JORGE IGNACIO",
		driver: "",
		movil : "102",
		placa:"SKR726",
		marca : "HYUNDAI",
		modelo : "2010",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "LOPEZ CHICA JUAN DIEGO",
		driver: "",
		movil : "103",
		placa:"TOB773",
		marca : "DAEWOO",
		modelo : "1988",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "RINCÓN BEDOYA NICOLÁS ALCIDES",
		driver: "RINCON RODRIGUEZ RICHARD EDUARDO",
		movil : "104",
		placa:"SZQ580",
		marca : "KIA PICANTO",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "ESPINOSA RIOS NELSON DE JS",
		driver: "",
		movil : "105",
		placa:"SKR672",
		marca : "KIA",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "MESA DEL RIO RUBEN DE JESUS",
		driver: "BERMUDEZ SANCHEZ JUAN BAUTISTA ",
		movil : "106",
		placa:"SKR672",
		marca : "RENAULT",
		modelo : "1988",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "TOBON BOTERO TOBIAS",
		driver: "BURITICA MALDONADO EFRAIN GUSTAVO",
		movil : "107",
		placa:"WHF233",
		marca : "RENAULT",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "ROMAN PATIÑO LUIS CARLOS",
		driver: "",
		movil : "108",
		placa:"SZQ596",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "MONTOYA URREA JORGE IVAN",
		driver: "PATIÑO ZULUAGA DEIBY ALEJANDRO",
		movil : "109",
		placa:"SKR312",
		marca : "HYUNDAI",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "MEJIA RESTREPO CARLOS MARIO ",
		driver: "RIOS LOPEZ LUIS EDUARDO ",
		movil : "011",
		placa:"WHE467",
		marca : "RENAULT",
		modelo : "1989",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "110",
		placa:"WHE747",
		marca : "MAZDA",
		modelo : "1991",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "111",
		placa:"SKR318",
		marca : "CHEVROLET",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "112",
		placa:"SKR231",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "113",
		placa:"WND936",
		marca : "CHEVROLET",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "114",
		placa:"TTU029",
		marca : "HYUNDAI",
		modelo : "2014",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "115",
		placa:"WHC111",
		marca : "RENAULT",
		modelo : "1988",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "116",
		placa:"SZQ858",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "117",
		placa:"SKR514",
		marca : "CHANGHE IDEAL",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "118",
		placa:"UPJ118",
		marca : "MAZDA",
		modelo : "1994",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "018",
		placa:"UPJ118",
		marca : "MAZDA",
		modelo : "1994",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "118",
		placa:"SKR264",
		marca : "RENAULT",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "119",
		placa:"TTT914",
		marca : "KIA",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "120",
		placa:"TOP042",
		marca : "HYUNDAI",
		modelo : "2004",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "121",
		placa:"SKR276",
		marca : "RENAULT",
		modelo : "2007",
		status : 0
	});


	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "122",
		placa:"SKR763",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "123",
		placa:"SKR456",
		marca : "CHANGHE",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "124",
		placa:"SKR608",
		marca : "HYUNDAI",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "125",
		placa:"TTT940",
		marca : "KIA",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "126",
		placa:"WNE294",
		marca : "RENAULT",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "127",
		placa:"SKR342",
		marca : "CHERRY",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "128",
		placa:"SKR745",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "129",
		placa:"WHE767",
		marca : "RENAULT",
		modelo : "1991",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "013",
		placa:"SKR524",
		marca : "HYUNDAI",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "130",
		placa:"SZQ541",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "131",
		placa:"SKR630",
		marca : "KIA",
		modelo : "2010",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "132",
		placa:"SZQ865",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "133",
		placa:"SKR319",
		marca : "CHEVROLET",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "134",
		placa:"WND797",
		marca : "CHEVROLET",
		modelo : "1992",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "135",
		placa:"SZQ870",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "136",
		placa:"SKR314",
		marca : "CHEVROLET",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "137",
		placa:"SKR794",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "138",
		placa:"SKR752",
		marca : "CHEVROLET",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "139",
		placa:"SZQ848",
		marca : "RENAULT",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "014",
		placa:"SKR609",
		marca : "CHEVROLET",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "140",
		placa:"WNE690",
		marca : "RENAULT",
		modelo : "1994",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "141",
		placa:"SKR575",
		marca : "CHEVROLET",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "142",
		placa:"SKR178",
		marca : "CHEVROLET",
		modelo : "2006",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "143",
		placa:"SKR473",
		marca : "HYUNDAI",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "144",
		placa:"WNE211",
		marca : "CHEVROLET",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "145",
		placa:"SKR272",
		marca : "CHEVROLET",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "146",
		placa:"SKR742",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "148",
		placa:"SKR697",
		marca : "HYUNDAI",
		modelo : "2010",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "150",
		placa:"SKR310",
		marca : "CHEVROLET",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "016",
		placa:"WND653",
		marca : "RENAULT",
		modelo : "1991",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "017",
		placa:"SKR787",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "021",
		placa:"SZQ412",
		marca : "HYUNDAI",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "029",
		placa:"WHC021",
		marca : "RENAULT",
		modelo : "1988",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "030",
		placa:"TTU145",
		marca : "RENAULT",
		modelo : "2014",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "034",
		placa:"WNE062",
		marca : "RENAULT",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "036",
		placa:"WHE730",
		marca : "RENAULT",
		modelo : "1991",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "039",
		placa:"SZQ621",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "043",
		placa:"WNE451",
		marca : "RENAULT",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "044",
		placa:"SKR180",
		marca : "CHEVROLET",
		modelo : "2006",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "045",
		placa:"SZQ812",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "046",
		placa:"WHE502",
		marca : "RENAULT",
		modelo : "1989",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "047",
		placa:"SKR398",
		marca : "HYUNDAI",
		modelo : "2008",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "048",
		placa:"SZQ963",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "049",
		placa:"TOB934",
		marca : "FORD FESTIVA",
		modelo : "1998",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "051",
		placa:"TOB016",
		marca : "CHEVROLET",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "056",
		placa:"TIQ794",
		marca : "LADA",
		modelo : "1993",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "080",
		placa:"SZQ530",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "081",
		placa:"SZQ952",
		marca : "HYUNDAI",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "082",
		placa:"SKR643",
		marca : "HYUNDAI",
		modelo : "2009",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "083",
		placa:"TTT957",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "084",
		placa:"TTT911",
		marca : "CHEVROLET",
		modelo : "2013",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "085",
		placa:"SKR283",
		marca : "CHEVROLET",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "086",
		placa:"SKR721",
		marca : "CHEVROLET",
		modelo : "2011",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "087",
		placa:"TTU070",
		marca : "RENAULT",
		modelo : "2014",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "088",
		placa:"SZQ943",
		marca : "CHEVROLET",
		modelo : "2012",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "089",
		placa:"SKR292",
		marca : "RENAULT",
		modelo : "2007",
		status : 0
	});

	Taxis.insert({
		createAt: new Date().getTime(),
		contact: "",
		features:"",
		ower : "",
		driver: "",
		movil : "090",
		placa:"SKR766",
		marca : "CHEVROLET",
		modelo : "2011",
		status : 0
	});

}