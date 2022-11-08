
const {src, dest, watch, parallel } = require("gulp");
//Parallel permite ejecutar dos funciones a la vez.

//DEPENDENCIAS PARA CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


// DEPENDENCIAS PARA IMAGENES
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css(done){
    src('src/scss/**/*.scss') //Identificar el archivo de SASS
        .pipe(plumber())
        .pipe(sass()) //Compilarlo
        .pipe(dest("build/css")) //Almacenarla en el disco duro

    done(); //Callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3 
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function versionWebp(done){
    const opciones = { //Variable con la calidad que deseamos obtener
        quality:50
    };
    src('src/img/**/*.{png,jpg}') //Identif. el formato q deseamos transformar
    .pipe(webp(opciones)) //llamamos la funcion que convierte las imagenes
    .pipe(dest('build/img'))
    done();
}

function versionAvif(done) {
    const opciones = { //Variable con la calidad que deseamos obtener
        quality: 50
    };
    src('src/img/**/*.{png,jpg}') //Identif. el formato q deseamos transformar
        .pipe(avif(opciones)) //llamamos la funcion que convierte las imagenes
        .pipe(dest('build/img'))
    done();
}

function javascript(done){// funcion escucha y envia archivos js a build
    src('src/js/**/*.js') //Escuchar todos los archivos js
        .pipe(dest('build/js'));
    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript); //llama la funcion javascript con la funcion dev

    done();
}

exports.css = css;
exports.js = javascript; // por si queremos ejecutar la funcion sola desde el comando
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev); //permite ejecutar dos funciones