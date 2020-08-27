function sumarElementos (array){
    let suma = array.reduce((acumulador, valor) => { 
        return acumulador + valor; 
    }, 0); 

    return suma;
}

const arr = [1,2,3]

console.log("La suma de los elementos del array es: " + sumarElementos(arr));