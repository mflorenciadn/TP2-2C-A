// tipos de datos en javascript (6 primitivos y object)
// los mas importantes Number, String, Boolean, Null, Undefined, Object, Symbol)
// Javascript es un lenguaje dinamico

// NUMBER
// let var1 = 1;
// let var2 = 0;
// let var3 = -0;

// console.log("1/0 = " + var1 / var2);
// console.log("Raiz cuadrada (-1): " + Math.sqrt(-1));

// // STRING 
// let saludo1 = "Pedro's home";
// let caracter = "c";
// let saludo2 = 'Hola mundo "infectado"';
// let pizza = '🍕';

// console.log(saludo2 + "quiero una " + pizza);
// // backtick, comilla francesa ` 
// console.log(`${saludo1} quiero una ${pizza}`);

// // null: respresenta la ausencia de algun valor
// let nulo; //= 45;
// //nulo = null;
// console.log(nulo);

// Undefined: propiedad de un objeto que no existe o variable no asignada.

let primeravariable = 1.5e5;
let segundavariable = 'Hola';
let terceravariable = false;

// Ejercicio 1
// Conversion / Coerción

let sumaNumeroString = primeravariable + segundavariable;
let sumaBooleanString = segundavariable + terceravariable; 
let sumaBooleanNumero = primeravariable + terceravariable;

// probar "sumar" un numero a un string a que tipo es convertido?
console.log(`suma de numero y string: ${sumaNumeroString} tipo: ${typeof sumaNumeroString} `);
// probar "sumar" un booleano a un string a que tipo es convertido?
console.log(`suma de boolean y string: ${sumaBooleanString} tipo: ${typeof sumaBooleanString} `);
// probar "sumar" un numero a un boleano a que tipo es convertido?
console.log(`suma de boolean y string: ${sumaBooleanNumero} tipo: ${typeof sumaBooleanNumero} `);

let cadenaNumer = '34';
console.log(parseInt(cadenaNumer) + 1);
let numero = 400;
let cadena = numero.toString();

// declaración de objetos
let actor = {
    name: 'Juan Perez',
    age: 40
};

console.log(actor);

//acceso a las propiedades, mediante corchetes
console.log("La propiedad 'name':", actor['name']);

//acceso mediante notacion punto
console.log("La propiedad 'age':", actor.age);











