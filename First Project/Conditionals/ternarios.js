var nombre;
var edad = 15;
if (edad > 10) {
    nombre = "Juan";
    console.log(nombre);
}
nombre = edad > 10 ? "Juan de ternarios" : "No se cumple"; //esta expresion es en lugar del if el simbolo ? es la pregunta y la primera es la condicion si es cierta y la segunda sino se cumple
console.log(nombre);
