const fs = require('fs');

const path = './texto.txt';

let datos = fs.readFileSync(path, 'utf-8');

console.log(datos);

datos += '🍕';

fs.writeFileSync(path,datos);


