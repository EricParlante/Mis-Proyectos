//TIPOS DE DATOS

//Se hace referencia al tipo de valor que va a tener esa variable.

//String o cadena de texto
const producto = "Monitor de 20 Pulgadas\""; // Diagonal invertida par no tener conflictos con comillas

const producto2 = String('Monitor 30 Pulgadas');

const producto3 = new String('Monitor 50 Pulgadas');

console.log(producto)
console.log(producto2.length)
console.log(typeof producto3) // Nos dice el tipo de dato en la string

// .lenght para conocer la extension que tiene una string

const tweet = "Aprendiendo JasvaScript con el Curso de Desarrollo Web Completo";

console.log(tweet.length)

// IndexOf para encontrar un elemento en un String (retorna una posicion)

console.log(tweet.indexOf("JasvaScript"));
console.log(producto2.indexOf('Monitor'));

//Includes retorna True o False

console.log(tweet.includes("JasvaScript"));
console.log(producto2.includes('Tablet'));