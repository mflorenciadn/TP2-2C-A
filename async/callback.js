
// Definicion: Es una funcion que se pasa como parametro a otra funcion.

function saludo(callback){
    console.log('Hola');
    let data = {
        name: 'Jhon'
    }

    callback(data);
}

saludo(data => {
    console.log('La funcion callback fue invocada');
    console.log(data);
});

saludo(data => {
    console.log('La funcion callback diferente');
    console.log(data);
});