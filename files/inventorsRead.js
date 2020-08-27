const fs = require('fs');

const path = './inventors.json';

let inventors = fs.readFileSync(path,'utf-8');

// convierte una cadena con formato JSON en un objeto javascript
inventors =  JSON.parse(inventors);

const inventor = {first: 'Pablo', last: 'Fernandez', year: 2001}
inventors.inventors.push(inventor);

// convierte objetos javascript en texto con formato JSON
inventors = JSON.stringify(inventors, null, 2);

const pathnuevo = './inventors2.json';
// save
fs.writeFileSync(pathnuevo, inventors);

console.log(inventors);

