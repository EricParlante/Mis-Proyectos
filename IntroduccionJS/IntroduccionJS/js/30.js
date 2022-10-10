//Promises: Son una promesa que refleja el valor que podria estar disponible ahora, a futuro o nunca.

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple.
    } else {
        reject('No se pudo iniciar sesion'); // El promise NO se cumple.
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));

//En los Promises existen tres valores posibles
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Es cuando se cumple el promise
//Reject: Se ha rechazado o no se pudo cumplir