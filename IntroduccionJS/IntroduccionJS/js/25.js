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


//forEach (puede ser utilizado unicamente en arreglos se ejecuta una sola vez por cada elemento que haya en un arreglo)
// Es solo para iterar los elementos de un arreglo
carrito.forEach(producto=> console.log(producto.nombre));


//Map (Es para crear un nuevo arreglo y se asigna a una nueva variable)

const arreglo2 = carrito.map(producto =>(`${producto.nombre} - ${producto.precio}`));

console.log(arreglo2)