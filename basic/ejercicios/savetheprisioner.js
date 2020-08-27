function saveThePrisioner(numeroDePrisioneros, numeroDeGolosinas, sillaInicial){
    let resto = numeroDeGolosinas % numeroDePrisioneros; //se dividen los caramelos entre la cantidad de prisioneros
    let carameloVeneno = resto + sillaInicial;  //Si no entra en ningun es porque no va a llegar a una segunda vuelta

    if (resto > 0){ // si no es el de la posicion inicial
        carameloVeneno -= 1;  // - 1 porque la posicion donde se empieza esta incluida (recibe un caramelo)
    }

    if (carameloVeneno > numeroDePrisioneros){ // si el numero del caramelo envenenado es mayor al numero de prisioneros, va a dar mas de una vuelta a la ronda
        carameloVeneno -= numeroDePrisioneros;
    }

    return carameloVeneno  
        
}

   
console.log(saveThePrisioner(1,1,1) === 1);
console.log(saveThePrisioner(5,2,1) === 2);
console.log(saveThePrisioner(5,2,2) === 3);
console.log(saveThePrisioner(3,7,3) === 3);
console.log(saveThePrisioner(7,19,2) === 6);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(352926151, 380324688, 94730870) === 122129406);
console.log(saveThePrisioner(353972922, 573651462, 244520504) === 110226121);
 

 