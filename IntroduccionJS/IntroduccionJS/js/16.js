//FUNCIONES
// DECLARACION DE LA FUNCION
sumar();

function sumar(){         // Si la mandas a llamar antes de definirla la función va a estar correcta
    console.log(10+10);
}



//EXPRESION DE LA FUNCIÓN
sumar2();
const sumar2 = function(){   // Si la mandas a llamar antes de definirla la funcion esta incorrecta
    console.log(3 + 3);      // Nos da error en la segunda etapa de ejecución por que es tomada como una variable.
}



//Esto se lo conoce como Hoisting en JavaScript y esto sucede porque JS se ejecuta en dos vueltas
//En la primera se registran todas las funciones y en la segunda es de ejecución (son llamadas)

/* Ejecución de Javascript en etapas 

1ra Etapa: Creacion y registro de las funciones.
2da Ejecución: En ella se ejecuta el codigo. */


