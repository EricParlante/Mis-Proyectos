// Classes
// El nombre de las clases siempre se debe colocar con mayuscula al comienzo

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 1200);
const producto3 = new Producto('Laptop', 2000);

console.log(producto2);
console.log(producto3);

//HERENCIA

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // En super se coloca lo que existe en la clase padre nada más.
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro(`JavaScript la Revolución`, 120, '456456123185633')

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());

