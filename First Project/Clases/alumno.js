var Alumno = /** @class */ (function () {
    function Alumno() {
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
alumno1.mostrarMensaje();
var alumno2 = new Alumno();
alumno2.asignar("Maria", "Paz", 100);
alumno2.mostrarMensaje();
