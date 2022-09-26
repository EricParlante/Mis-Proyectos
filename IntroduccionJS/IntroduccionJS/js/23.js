const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta' : 
        console.log('Pagaste con Tarjeta');
    break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
    break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
    break;
    default:   // En los SWITCH la opción por default es obligatoria.
        console.log('Aún no has pagado')
    break;
}