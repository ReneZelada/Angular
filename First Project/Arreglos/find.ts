interface Alumno{
    ID:number;
    nombre: string;
    apellido: string;
}

var alumnos: Alumno[] =[]

alumnos.push({ID:1,nombre: "Ana",apellido:"Pineda"})
alumnos.push({ID:2,nombre: "Juana",apellido:"Pineda"})
alumnos.push({ID:3,nombre: "Johana",apellido:"Pineda"})

var alumnoEncontrado = alumnos.find((alumno)=>{
    //return alumno.ID ==2
    return alumno.nombre.includes("ana")//Busca los nombres que tengan la palabra ana
})

console.log(alumnoEncontrado)