const dns = require('dns');

// Aqui pegamos o primeiro paramêtro passado para esse script para usa-lo como host da query no DNS
const host = process.argv[2];

dns.lookup(host, { all: true },(err, allTheAddress) => {
	// Colocando a opção `all` como true, 
	// o método passa a nos retornar um array, com objetos
	// para que possamos listar todos os endereços encontrados na query :D

	console.log(`Founded ${host} at:\n`);

	allTheAddress.forEach(
		(fullAddress) => console.log(`Address: ${fullAddress.address} of family: IPv${fullAddress.family}`)
	);
});