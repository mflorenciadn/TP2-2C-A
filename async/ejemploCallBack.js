// Ejemplo PEDIDPS STARTBUCKS

let pedido1 = {
    nombre: 'Caffe Vanilla',
    tipo: 'bebida caliente',
    tamaño: 'Grande',
    cliente: 'Juan'
};

let pedido2 = {
    nombre: 'Cold Brew',
    tipo: 'bebida fria',
    tamaño: 'Grande',
    cliente: 'Pablo'
};

// Defincion del pedido

function pedidoStarbuck(pedido, callBackCliente ) {
    switch (pedido.nombre) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callBackCliente(null, pedido);
            }, 4 * 1000);
            break;
        case 'Cold Brew':
            setTimeout(() => {
                callBackCliente(null, pedido);
            }, 2*1000);
        default:
            break;
    }
}

pedidoStarbuck(pedido1, (error, result) => {
    if(!error){
        console.log(`${pedido1.nombre} finalizado, llamar a: ${result.cliente}`);
    }
});

pedidoStarbuck(pedido2, (error, result) => {
    if(!error){
        console.log(`${pedido2.nombre} finalizado, llamar a: ${result.cliente}`);
    }
});