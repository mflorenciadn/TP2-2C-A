function escalera(numeroPisos) {
    for (let i = 1; i < numeroPisos + 1; i ++){
        console.log(" ".repeat(numeroPisos - i) + "#".repeat(i));
    }
}

escalera(6);
