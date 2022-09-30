//THIS hace referencia a los mismos valores del objeto y no a una variable.

const reservacion = {
    nombre: 'Eric',
    apellido: 'Parlante',
    total: 5000,
    pagado: false,              //un Arrow Function no funcionaria 
    informacion: function () {  //porque hace referencia a la ventana global
        console.log(`El cliente: ${this.nombre} reservó y su cantidad a pagar es de: ${this.total}`)
    }
}

const reservacion2 = {
    nombre: 'Julian',
    apellido: 'Navarro',
    total: 3500,
    pagado: false,
    informacion: function () {
        console.log(`El cliente: ${this.nombre} reservó y su cantidad a pagar es de: ${this.total}`)
    }
}


reservacion.informacion();
reservacion2.informacion();