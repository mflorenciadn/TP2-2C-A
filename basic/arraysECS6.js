const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

function print(inventors){
    console.log(`Nombre         Apellido       Año`);
    console.log(`----------------------------------`);

    inventors.forEach(inventor => {
        console.log(`${inventor.first.padEnd(12, ' ')} ${inventor.last.padEnd(12, ' ')}${inventor.year}`);
    });

}

// Ejercicio
// 1.- Filtrar los inventores nacidos antes del 1800
console.log();
console.log('Ejercicio 1.-');

//version compacta
print(inventors.filter(inventor => inventor.year > 1800));

// version tradicional
let inventoresMenores = null;

inventoresMenores = inventors.filter(
    function (inventor){
        return inventor.year > 1800;
    }
);
print(inventoresMenores);

// Ejercicio 2
// 2.- Convertir el apellido en mayusculas
console.log();
console.log("Ejercicio 2.-");
print(inventors.map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year})));

// Ejercicio 3
// 3.- Aplicar ambas cosas 
console.log();
console.log('Ejercicio 3.-');

print(
    inventors
            .map(inventor => ({first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year}))
            .filter(inventor => inventor.year > 1800)
);

//Ejercicio 4
// 4.- Buscar inventor Kepler y retornarlo
console.log();
console.log('Ejercicio 4.-');
console.log(inventors.find(inventor => inventor.last === 'Kepler'));

// Ejercicio 5
// 5.- Alguno de los inventores nacio en 1858

console.log();
console.log('Ejercicio 5.-');
console.log(inventors.some(inventor => inventor.year === 1858));

// Ejercicio 6
// Ordenamiento 
console.log();
console.log();
console.log('Ejercicio 6.-');
print(inventors.sort((a,b) => (a.last > b.last)? 1: -1));

print(inventors.sort((a,b) => a.year - b.year));

// Ejercicio 7
// [{name: {first: 'first name',}}]
/**
 * [{name: 
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * }, 
 * year: year
 * ]
 
{name: 
    {first: 'Pablo', last: Fernandez}, 
    year: 1987
}
 **/
console.log();
console.log('Ejercicio 7.-');
console.table(inventors.map(inventor =>
    (
        {
            name: {first: inventor.first, last: inventor.last},
            year: inventor.year
        }
    )
));

console.table(inventors);










