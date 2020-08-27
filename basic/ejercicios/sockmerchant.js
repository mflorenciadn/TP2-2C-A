function contarParesDeMedias(cantMedias, arrayColores){
    arrayColores.sort((a,b) => a-b);
  
    let contadorPares = 0;

    for (let i = 0; i < cantMedias; i++) {
        if(arrayColores[i] == arrayColores[i+1]) {
            contadorPares++;
            i++;
        }
    }
    return contadorPares;
}

let arr = [10,20,20,10,10,30,50,10,20];

console.log("Se podrán formar " + contarParesDeMedias(9, arr) + " pares de medias.");


