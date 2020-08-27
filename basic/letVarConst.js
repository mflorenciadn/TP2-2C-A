// let vs var

// let es la forma mas actual de declaración de variables ES6

var x = 1;

if (x === 1){
    var x = 2; // otra variable
    console.log(x);    
}
console.log(x);

// const 
const key = 'abc123';

// 1.- declarar como const por defecto
// 2.- declarar como let

const person = {
    name: 'pablo',
    age: 28
};

person.name = 'Juan';
console.log(person);

const wes = Object.freeze(person);
wes.age = 44;

console.log(wes);

