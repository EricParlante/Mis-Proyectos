//Declaración de la funcion

function sumar(numero1 = 0, numero2 = 0) {     //numero1 y numero2 son parametros    
    console.log(numero1 + numero2);
}
sumar(10, 10); //Son argumentos argumentos o valores reales
sumar(3,8);   
sumar(1);   


//EXPRESION DE LA FUNCIÓN

const sumar2 = function (n1, n2) {   
    console.log(n1 + n2);     
}
sumar2(5,10);