const fs = require('fs');
const vm = require('vm');

const script = fs.readFileSync('./mortySelector.js').toString();
const sandbox = {
  mortys: [
    {
        name: 'Morty Smith',
        dimension: 'C-137',
    },
    {
        name: 'Mortytown Loco',
        dimension: 'unknown'
    }
]  
};

vm.createContext(sandbox);

vm.runInContext(script, sandbox);

console.log(JSON.stringify(sandbox, null, 2))