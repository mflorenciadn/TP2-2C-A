// Tipos de declaracion de funciones

// la forma simple
function add(a,b){
    return a + b;
}

// asignando a una variable
const square = function(x){
    return x*x;
};

console.log(add(5,4));
console.log(square(2));

// Arrow Functions
// son siempre anonimas
// (parametros) => {sentencias}
// parametro => {sentencias}
// parametro => expresion




const getSum = (a, b) => {
    return a + b;
};

const getSum2 = (a,b) => a + b;

const getCuadrado = x => x * x;

const saludo = () => 'Hola mundo';

console.log(saludo());
console.log(getCuadrado(2));

//const returnObject  = () => ({});
