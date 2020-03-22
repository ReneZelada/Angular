interface Usuario{
    nombre: string,
    apellido:string
}

var listadoUsuarios: Array<Usuario> = [
{
    nombre: "Ana",
    apellido: "Carcamo"
},
{
    nombre: "Lupita",
    apellido: "Juarez"
},
{
    nombre: "Helmer",
    apellido: "Martinez"
},
]

for(let posicion in listadoUsuarios)
{
    console.log(listadoUsuarios[posicion])
}