// Async / Await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando Clientes... espere...');

        setTimeout(()=> {
            resolve('Los clientes fueron descargados..');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados..');
        }, 3000);
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos)
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]); 
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch(error) {
        console.log(error);
    } //Esta manera sirve para que el async y await comience y termine al mismo tiempo.
}

app()


setTimeout(function () {
    console.log('Set timeout...')
}, 5000);