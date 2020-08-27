const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

// while
let i = 0
while (i < inventors.length) {
    console.log(inventors[i]);
    i ++;
}

// Ejercicio: dada una cadena por ejemplo 'javascriptloops' imprimir
// primero todas las vocales y a continuacion las consonantes
// aaioojvscr...... 