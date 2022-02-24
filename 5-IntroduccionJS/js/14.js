//   Arreglos o Arrays 

const numeros = [10,20,30,40,50];


// Acceder a los valores de un arreglo

// console.log(numeros[4]);

// Conocer la extencion de un arreglo

// console.log(meses.length);

// Para recorrer cada elemento de la extension

// numeros.forEach( function(numero){
//     console.log(numero);
// })  

numeros.push(60); //al final del arreglo

numeros.unshift(-10,-20,-30); //al inicio del arreglo

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); //elimina el ultimo elemento
// meses.shift(); //elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

const nuevoArreglo = ['Junio',...meses];
console.log(nuevoArreglo);