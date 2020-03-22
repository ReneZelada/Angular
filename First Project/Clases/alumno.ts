class Alumno{
    nombre: String;
    apellido: string;
    peso: number;


mostrarMensaje() : void{
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
alumno1.mostrarMensaje()

var alumno2: Alumno = new Alumno();
alumno2.asignar("Maria","Paz",100)
alumno2.mostrarMensaje()
