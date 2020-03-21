interface alumnos {
    nombre:string,
    edad:number
}

var listadoDeNombres: Array<string> = ["Juan","Maria","Ana","Carmen"]

var listadoDeNumeros: Array<number> = [15,25,36,695,95]

var listadoDeAlumnos: Array<alumnos> =[
    {
        nombre: "Maria",
        edad: 15
    },
    {
        nombre: "Ana",
        edad: 9
    },
    {
        nombre: "Johana",
        edad: 56
    }
]
console.log(listadoDeAlumnos)
console.log(listadoDeAlumnos[2].nombre)//asi se accede al registro del nombre del registro 3 Johana
