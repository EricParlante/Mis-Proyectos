//Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio:300,
    disponible: true,
}


// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.disponible);
// console.log(producto[precio]); // Otra alternativa para acceder al elemento de un objeto


//Agregar Nuevas Propiedades

producto.imagen = 'Imagen.jpg';

//Eliminar propiedades

delete producto.disponible;

console.log(producto);
