var cantidadSolicitada = 1;
if (cantidadSolicitada > 15) {
    console.log("Aplicamos descuento 50%");
}
else if (function (cantidadSolicitada) { return 10 && cantidadSolicitada <= 15; }) {
    console.log("Aplicamos descuento del 10%");
}
else {
    console.log("No aplica descuento");
}
