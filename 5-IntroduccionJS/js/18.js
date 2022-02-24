function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar(10,10);


const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
};
sumar2(5 , 10);

function sumar3(n1 = 0, n2 = 0) {
    console.log(n1+n2);
}
sumar3(12);