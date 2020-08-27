function catAndMouse (a, b, c) {
    let mensaje;
    const mensajeA = "Cat A";
    const mensajeB = "Cat B";
    const mensajeC = "Mouse C";

    let array = [a, b, c];
    const posicionCatA = array[0];
    const posicionCatB = array[2];
    const posicionMouseC = array[1];

    if (Math.abs(posicionMouseC-posicionCatA) === Math.abs(posicionMouseC-posicionCatB)){
            mensaje = mensajeC;
    }
    else if (Math.abs(posicionMouseC-posicionCatA) > Math.abs(posicionMouseC-posicionCatB)){
            mensaje = mensajeB;
    }
    else if (Math.abs(posicionMouseC-posicionCatA) < Math.abs(posicionMouseC-posicionCatB)){
        mensaje = mensajeA;
    }

    return mensaje;
};

console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));