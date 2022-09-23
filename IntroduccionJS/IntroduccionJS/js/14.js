// ARREGLOS O ARRAYS
//Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');


//Acceder a los valores de un arreglo

// console.log(numeros[4]);

//Conocer la  extension de un arreglo

// console.log(meses.length);

// numeros.forEach(function(numero){
//     console.log(numero)
// })

//AGREGAR ELEMENTOS A UN ARREGLO

numeros[5] = 60; //Se recomienda no modificar los arreglos originales

numeros.push(70,80,90); // Agrega elementos al final del arreglo
numeros.unshift(-10,-20,-30); // Agrega elementos al principio del arreglo

meses.pop(); //Elimina el ultimo elemento del arreglo
meses.shift(); //Elimina el primer elemento del arreglo
meses.splice(2,1); //Recorre el arreglo hasta la posición que queramos eliminar y el segundo numero indica cuantos elementos eliminan a partir de ese elemento.

console.table(numeros)

console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];

console.table(nuevoArreglo);