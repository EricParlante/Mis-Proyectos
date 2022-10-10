//Notification API
const boton = document.querySelector('#boton');   //Document Hace referencia a todo el documento html

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado));
});

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon:'img/taza.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}