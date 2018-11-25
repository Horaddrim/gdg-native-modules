const os = require('os');

const nets = os.networkInterfaces();

// Aqui, pegamos o primeiro argumento, que é exatamente o nome da interface que queremos escanear e ver o endereço
// Caso não passemos nenhuma, ele usa a wlan0 como default;

const netInterface = Object.keys(nets).find(interfaces => process.argv[2]) || 'wlan0';

console.log(`Scanning interface ${netInterface}`);
console.log(`Address: ${nets[netInterface][0].address}`);