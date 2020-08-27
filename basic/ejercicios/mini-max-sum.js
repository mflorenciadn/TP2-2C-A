function maximo (array){
    //array.sort() -> ordena por default de menor a mayor. Transforma numeros en String y los compara segun Unicode
    //array.sort(([funcionDeComparacion])) -> Especifico el metodo mediante el cual quiero que se comparen
    //array.sort((first, second) => first - second); -> Ordena de menor a mayor
    array.sort(function(a, b){
        return a - b; //ordena en orden ascendente
    });
    
    return array[array.length-1];
};

function minimo (array){
    array.sort(function(a, b){
        return a - b;
    });
    return array[0];
};

function sumarElementos (array){
    //metodo Reduce: callback function con dos parametros: 
    //Primer parametro: arrow function
    //Segundo parametro: valor inicial para el acumulador (por lo general, 0)
    let suma = array.reduce((acumulador, valorActual) => { //En cada iteracion recibe estos parametros. El "valor actual" es cada uno de los valores del array en cada iteracion.
        return acumulador + valorActual; //En cada iteracion realiza esta accion.
    }, 0); 

    //metodo Reduce es otra forma de hacer esto:
    //let suma = 0;
    //for (let i of array){
    //    suma += i;
    //}

    return suma;
}

function sumaMinima (array){
    return sumarElementos(array) - maximo(array);
}

function sumaMaxima (array){
    return sumarElementos(array) - minimo(array);
}

const arr = [1,3,9,7,5];

console.log("Suma mínima: " + sumaMinima(arr));
console.log("Suma máxima: " + sumaMaxima(arr));
console.log("Mínimo: " + minimo(arr));
console.log("Máximo: " + maximo(arr));
