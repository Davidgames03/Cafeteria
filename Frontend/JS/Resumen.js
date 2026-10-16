var datos = new URLSearchParams(window.location.search);

var sinDatos = document.getElementById("sin-datos");
var detalle = document.getElementById("detalle");
var confirmado = document.getElementById("confirmado");
var mensajeFinal = document.getElementById("mensaje-final");
var botonConfirmar = document.getElementById("boton-confirmar");
var botonMenu = document.getElementById("menu-boton");
var menu = document.getElementById("menu");

var nombreCliente = datos.get("cliente");

if (nombreCliente == null) {
    sinDatos.hidden = false;
    detalle.hidden = true;
} else {
    document.getElementById("cliente").textContent = nombreCliente;
    document.getElementById("producto").textContent = datos.get("producto");
    document.getElementById("cantidad").textContent = datos.get("cantidad");
    document.getElementById("tamano").textContent = datos.get("tamano");

    if (datos.get("llevar") == "Sí") {
        document.getElementById("llevar").textContent = "Sí";
    } else {
        document.getElementById("llevar").textContent = "No";
    }

    var observaciones = datos.get("observaciones");

    if (observaciones == null || observaciones == "") {
        document.getElementById("observaciones").textContent = "Sin observaciones";
    } else {
        document.getElementById("observaciones").textContent = observaciones;
    }
}

botonConfirmar.addEventListener("click", function () {
    detalle.hidden = true;
    confirmado.hidden = false;
    mensajeFinal.textContent = "Gracias " + nombreCliente + ", tu pedido fue registrado.";
});

botonMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
});