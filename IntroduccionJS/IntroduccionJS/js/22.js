
const puntaje = 1000;

if (puntaje !== 1000) {
    console.log('Su poder no es de 1000')
} else {
    console.log('Su poder de pelea es de 1000')
}
// ---------- ********* -------------

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El Usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

// ---------- ********* --------------

const rol = 'EDITOR';

if(rol==='ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres edior, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso')
}

