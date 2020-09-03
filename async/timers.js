
setTimeout(() => {
    console.log('Hola mundo');
}, 2* 1000);

console.log('Hola mundo por fuera');

setInterval(() => {
    console.log('Hola mundo 2');
}, 3 * 1000);

// let i = 0;

// let timerid = setInterval(() => {
//     console.log('Hola mundo ' + i );
//     i++;
//     if(i === 10){
//         clearInterval(timerid);
//     }
// }, 1000);

// Ejercicio: Imprimir un "Hola mundo" por siempre, en intervalos de 1 segundo, incrementando el 
// intervalo en 1 segundo. La segunda vez va demorar 2 segundos, la tercera 3

// Hola mundo 1 <- en 1 seg
// Hola mundo 2 <- en 2 seg
// Hola mundo 3 <- en 3 seg
// ..........
// Restriccion: Solo se puede uar const (no let, ni var)
