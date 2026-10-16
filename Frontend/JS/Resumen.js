// datos que vienen en la dirección de la página
var datos = new URLSearchParams(window.location.search);

var sinDatos = document.getElementById("sin-datos");
var detalle = document.getElementById("detalle");
var confirmado = document.getElementById("confirmado");
var mensajeFinal = document.getElementById("mensaje-final");
var botonConfirmar = document.getElementById("boton-confirmar");
var botonMenu = document.getElementById("menu-boton");
var menu = document.getElementById("menu");

var nombreCliente = datos.get("cliente");

// si no llegó ningún pedido, muestra el aviso
if (nombreCliente == null) {
    sinDatos.hidden = false;
    detalle.hidden = true;
} else {
    // escribe cada dato en su lugar
    document.getElementById("cliente").textContent = nombreCliente;
    document.getElementById("producto").textContent = datos.get("producto");
    document.getElementById("cantidad").textContent = datos.get("cantidad");
    document.getElementById("tamano").textContent = datos.get("tamano");

    // muestra Sí o No en "para llevar"
    if (datos.get("llevar") == "Sí") {
        document.getElementById("llevar").textContent = "Sí";
    } else {
        document.getElementById("llevar").textContent = "No";
    }

    // si no escribió observaciones, se avisa
    var observaciones = datos.get("observaciones");

    if (observaciones == null || observaciones == "") {
        document.getElementById("observaciones").textContent = "Sin observaciones";
    } else {
        document.getElementById("observaciones").textContent = observaciones;
    }
}

// al confirmar, se oculta el resumen y sale el mensaje final
botonConfirmar.addEventListener("click", function () {
    detalle.hidden = true;
    confirmado.hidden = false;
    mensajeFinal.textContent = "Gracias " + nombreCliente + ", tu pedido fue registrado.";
});

// abre y cierra el menú del celular
botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
});