// Métodos de Propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el id = ${id}`)
    },
    pausar : function(){
        console.log('Pausando ...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Se eliminó la canción con el id = ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3842);
reproductor.crearPlaylist('Heavy Metal')
reproductor.reproducirPlaylist('Heavy Metal')