// Inicializamos Los Usuaris del Sistema si no existen
if (Meteor.users.find().count() === 0) {
	console.log('---------->>> CREANDO FIXTURE DE TAXIS <<<----------')
	Accounts.createUser({
		username: 'johan',
		password: 'johan123',
		profile: {
			name: 'Johan Ramirez',
			rol: 'agent',
			extension: '101'
		}
	});

	Accounts.createUser({
		username: 'maricela',
		password: 'mar123',
		profile: {
			name: 'Maricela',
			rol: 'agent'
		}
	});
	
	Accounts.createUser({
		username: 'leidy',
		password: 'lei123',
		profile: {
			name: 'Leidy',
			rol: 'agent'
		}
	});

	Accounts.createUser({
		username: 'kelly',
		password: 'kel123',
		profile: {
			name: 'Kelly',
			rol: 'agent'
		}
	});

	Accounts.createUser({
		username: 'bibiana',
		password: 'bib123',
		profile: {
			name: 'Bibiana',
			rol: 'agent'
		}
	});

	Accounts.createUser({
		username: 'admin',
		password: 'cootransceja123',
		profile: {
			name: 'Administrador',
			rol: 'admin'
		}
	});
}
