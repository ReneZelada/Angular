var cantidadDeNumerosEnviados = 50;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log("Son veinte y cinco");
        break;
    }
    case 20: {
        console.log("Son veinte");
        break;
    }
    case 15: {
        console.log("Son quince");
        break;
    }
    default: {
        console.log("Ninguna se cumple");
    }
}
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albunes"] = 2] = "albunes";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 1;
switch (menu) {
    case tipoMenu.canciones: {
        console.log("Menu seleccionado Canciones");
        break;
    }
    case tipoMenu.albunes: {
        console.log("Menu seleccionado Albunes");
        break;
    }
    case tipoMenu.perfil: {
        console.log("Menu seleccionado Perfil");
        break;
    }
    default: {
        console.log("Opcion no encontrada");
    }
}
