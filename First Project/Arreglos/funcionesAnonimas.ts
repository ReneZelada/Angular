interface Alumno{
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] =[]

alumnos.push({nombre: "Ana",apellido:"Pineda"})
alumnos.push({nombre: "Juana",apellido:"Pineda"})
alumnos.push({nombre: "Johana",apellido:"Pineda"})

alumnos.forEach((alumno)=>{
    console.log(alumno.nombre)
})

//nombres.forEach((nombre)=> console.log(nombre))// sirve para busqueda de elementos dentro de un arreglo

