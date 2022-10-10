
async function obtenerEmpleados(){
    
    const archivo = 'empleados.json';
    // fetch(archivo)                                 //Toma como valor alguna url o archivo
    //     .then(resultado => resultado.json())
    //     .then(datos=>{
    //         // console.log(datos.empleados));

    //         const { empleados } = datos;    // Destructuring de datos
    //     // console.log(empleados);

    //     empleados.forEach( empleado=>{
    //         // console.log(empleado);
    //         console.log(empleado.id);
    //         console.log(empleado.nombre);
    //         console.log(empleado.puesto);
    //     })
    // })   

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();