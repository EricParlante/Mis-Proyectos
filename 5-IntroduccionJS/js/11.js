//Destructuring de objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
//Forma anterior de hacerlo

//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);

// Destructuring

const{precio, nombreProducto} = producto;  //Extraemos y creamos la variable en un solo paso


console.log(precio);
console.log(nombreProducto);