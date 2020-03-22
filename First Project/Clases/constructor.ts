class Alumno{
    nombre: String;
    apellido: string;
    peso: number;

constructor()
{
    this.nombre="Pedro"
    this.apellido="Juarez"
    this.peso=15
    this.mostrarMensaje()
}
private mostrarMensaje() : void{
console.log("Hola", this.nombre)
}
asignar(name:string,lastName:string,weight:number)
{
    this.nombre = name;
    this.apellido = lastName;
    this.peso = weight;
}
}

var alumno1: Alumno = new Alumno();
alumno1.asignar("Juan","Paz",100)


var alumno2: Alumno = new Alumno();
alumno2.asignar("Maria","Paz",100)
