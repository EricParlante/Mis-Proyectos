// POO - Programación orientada a objetos

//Object Literal

const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Producto(nombre, precio, disponible=false){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor curvo de 49"', 1200, true);
const producto3 = new Producto('Laptop', 2000);
const producto4 = new Producto('Auriculares', 100 ,true);

console.log(producto2, producto3, producto4);

// Esta forma no es conveniente ya que se puede mezclar con otro objeto.
function formatearProducto(producto){
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`
}


console.log(formatearProducto(producto2));

//El prototype nos va a permitir crear funciones que solo se utilizan en un objeto en especifico.
//En este caso solo se esta asignando al Producto

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

console.log(producto2.formatearProducto());