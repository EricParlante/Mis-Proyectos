"use strict"; //Correr JavaScript en modo estricto
// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // No te permite agregar, cambiar, ni eliminar propiedades de el objeto.
Object.seal(producto); // No te permite agregar ni eliminar propiedades pero si te deja modificar las propiedades existentes.

producto.imagen = 'imagen.png'

console.log(producto)
console.log(Object.isFrozen(producto)); // Te dice si el objeto esta congelado o Sealed (Sellado)
console.log(Object.isSealed(producto));