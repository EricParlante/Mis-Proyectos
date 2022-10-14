// FORMAS DE SELECCIONAR ELEMENTO Y CONTENIDO HTML; Son 3
//querySelector

const heading = document.querySelector('.header__texto h2') // Retorna 0 O 1 Elemento
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a'); //Para seleccionar una clase inician con punto
                                                            //Para seleccionar un ID inician con # 
                                                            //Esto es muy similar a css
                                                            // querySelectorAll retorna de 0 a muchos
enlaces[0].textContent= 'Nuevo Texto para enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('url'); //agregar clase nueva
enlaces[0].classList.remove('url') //eliminar clase (NO HACE FALTA EL PUNTO)

console.log(enlaces[0]); 

//getElementById

const heading2 = document.getElementById('heading');
console.log(heading2)

//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A'); //LA etiqueta que vamos a crear se escribe en mayusculas

//1.Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'

//2.Agregar el Texto
nuevoEnlace.textContent= 'Un Nuevo Enlace'

//3.Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

//4.Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //Agregar un hijo, en este caso agregamos el elemento creado
                                     //al documento.

console.log(nuevoEnlace);


//EVENTOS

console.log(1);

window.addEventListener('load',imprimir) //Load espera a que JS y los archivos que                         
                                        //dependen del html estén listos.(css, js, html);

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded',function(){
    console.log(4); //En DOMMContentLoeaded espera que se cargue solo el Html, 
})                  //No espera CSS O imagenes

console.log(5);

function imprimir(){
    console.log(2)
}

window.onscroll = function(){
    console.log('Scroling...')
}

//Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){ //Esto es ejemplo pero usar 'e' como argumento
//     console.log(evento);
//     evento.preventDefault(); // Evitamos la accion por default util para formularios..
//     console.log('Enviando Formulario'); //click asociado al boton
// })

//Eventos de los inputs y textarea

const datos = {
    nombre:'',
    email:'',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit
formulario.addEventListener('submit', function (evento) { //Submit asociado al formulario,
    evento.preventDefault();   //Este codigo solo funciona con formulario y debe tener un input "submit"

    //Validar el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre===''|| email===''||mensaje===''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta la ejecución del codigo
    }
    mostrarAlerta('El formulario ha sido enviado correctamente');
    //Enviar el formulario
    console.log('Enviando formulario..')
})

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value

    console.log(e.target)

    // console.log(datos);
}

//Motrar Alertas con una sola función
function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },5000);
}

// //Mostrar error en pantalla
// function mostrarError(mensaje){
//     error.classList.add('error')

//     formulario.appendChild(error)

//     //Que desaparezca la alerta despues de 5 segundos
//     setTimeout(()=>{
//         error.remove();
//     },5000);
// }
// //Mostrar una alerta que se envio el mensaje
// function formularioEnviado(mensaje){
//     alerta.classList.add('correcto')

//     formulario.appendChild(alerta)

//     //Para que desaparezca el check despues de 5 segundos
//     setTimeout(()=>{
//         correcto.remove();
//     },5000);
// }

