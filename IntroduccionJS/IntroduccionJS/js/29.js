//Try Catch

const numero1 = 20;
const numero3 = 30; 

console.log(numero1);

try {  // Nos muestra la linea y el error, pero sigue ejecutando el codigo.
    console.log(numero2);
} catch (error) {
    console.log(error);
}

console.log(numero3);