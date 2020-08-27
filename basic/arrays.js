// declaracion e inicialiciacion de arrays
// las funciones mas importantes en el tratamiento de arrays.

let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

//let primerNombre = nombres[0];

let ultimoNombre = nombres[nombres.length-1];

// iterar en un Array
console.log('Iterar con for');
for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index]; 
    //console.log(element);
}

console.log('Iterar con for of');
for (const nombre of nombres) {
    if(nombre === 'Pedro'){
        // continue;
        break;
    }
    //console.log(nombre);
}

// agregar elemento al final 
nombres.push('Elena');

// sacar del principio
let primerNombre = nombres.shift();

// agregar al principio
nombres.unshift('Anna');

//Bucar por posición
let position = nombres.indexOf('Elena');

// Eliminar en una posicion
// Borrar el elmento en la posicion 2
nombres.splice(2,1);

let nuevoNombres = nombres.slice();

// Ordenar un array simple
nombres.sort();
console.log(nombres);

let numeros = [23, 100, 1, 11];
numeros.sort();
console.log(numeros);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

// ordenamiento de objetos, para la siguiente.

// Ejercicio
// Dado un array de numeros enteros positivos, 
// determinar el segundo mas grande (o segundo mayor)


// imputs [2,4,5,6] output 5
// imputs [4,6,7,8,7] output 7
// imputs [4,6,7,7] output 6

function segundoMayor(array){
    // determinar el segundo mayor
    array.sort();
    return array[array.length-2];
}

console.log(segundoMayor([2,4,5,6]) === 5);
console.log(segundoMayor([4,6,7,8,7]) === 7);
console.log(segundoMayor([4,6,7,7]) === 6);

