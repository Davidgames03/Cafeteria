const parametros = new URLSearchParams(window.location.search);

const datos = {
    cliente: parametros.get('cliente'),
    producto: parametros.get('producto'),
    cantidad: parametros.get('cantidad'),
    tamano: parametros.get('tamano'),
    llevar: parametros.get('llevar'),
    observaciones: parametros.get('observaciones')
};

const hayPedido = datos.cliente || datos.producto;

if (!hayPedido) {
    document.getElementById('sin-datos').hidden = false;
    document.getElementById('detalle').hidden = true;
} else {
    document.getElementById('cliente').textContent = datos.cliente || '-';
    document.getElementById('producto').textContent = datos.producto || '-';
    document.getElementById('cantidad').textContent = datos.cantidad || '-';
    document.getElementById('tamano').textContent = datos.tamano || '-';
    document.getElementById('llevar').textContent = datos.llevar || 'No';
    document.getElementById('observaciones').textContent = datos.observaciones || 'Sin observaciones';
}

document.getElementById('boton-editar').addEventListener('click', function (evento) {
    if (window.history.length > 1) {
        evento.preventDefault();
        window.history.back();
    }
});

const botonMenu = document.getElementById('menu-boton');
const menu = document.getElementById('menu');
 
//Menu despegable para el celular
botonMenu.addEventListener('click', function () {
    const abierto = menu.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', abierto);
});