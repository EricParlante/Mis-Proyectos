// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Forma anterior de hacerlo 
const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring de Objetos

const { precio, nombreProducto } = producto; // crea la variable y extrae el valor en un solo paso.
// const {nombreProducto} = producto; 

console.log(precio);
console.log(nombreProducto);