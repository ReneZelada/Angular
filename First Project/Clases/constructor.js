var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = "Pedro";
        this.apellido = "Juarez";
        this.peso = 15;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre);
    };
    Alumno.prototype.asignar = function (name, lastName, weight) {
        this.nombre = name;
        this.apellido = lastName;
        this.peso = weight;
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.asignar("Juan", "Paz", 100);
var alumno2 = new Alumno();
alumno2.asignar("Maria", "Paz", 100);
