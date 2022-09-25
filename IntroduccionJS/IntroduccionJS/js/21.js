//ARROW FUNCTIONS 

const sumar2 = (n1,n2) => console.log(n1 + n2);  

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiento ${tecnologia}`)

// Cuando los arrow functions tienen una sola linea, los corchetes son opcionales
//cuando solo tienen un solo parametro los parentesis tambien son opcionales
// El return tambien es opcional

aprendiendo('Javascript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

//forEach

meses.forEach( mes=> {
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Some ideal para arreglo de objetos
let resultado;

resultado = carrito.some( producto => producto.nombre === 'Celular'); //Return opcional

//Reduce sirve para sumar todos los valores del arreglo.

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter sirve para discriminar algunos atributos con ciertas condiciones.

resultado = carrito.filter(producto=> producto.precio > 400);
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);