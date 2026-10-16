const pedidoModel = require('../Models/LpedidoModel');

async function registrarPedido(req, res) {
    try {
        const cliente = req.body.cliente;
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const tamano = req.body.tamano;
        const llevar = req.body.llevar ? 'Sí' : 'No';
        let observaciones = req.body.observaciones || '';

        if (req.body.observacion === 'No') {
            observaciones = '';
        }

        if (typeof cliente !== 'string' ||
            !cliente.trim() ||
            typeof producto !== 'string' ||
            !producto.trim() ||
            typeof tamano !== 'string' ||
            !tamano.trim() ||
            !Number.isInteger(cantidad) ||
            cantidad < 1) {
            return res.status(400).send('Datos del pedido son inválidos');
        }

        const id = await pedidoModel.registrarPedido(
            cliente.trim(),
            producto.trim(),
            cantidad,
            tamano.trim(),
            llevar,
            observaciones.trim()
        );

        const parametros = new URLSearchParams({
            id: id,
            cliente: cliente.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            tamano: tamano.trim(),
            llevar: llevar,
            observaciones: observaciones.trim()
        });

        res.redirect('/Resumen.html?' + parametros.toString());
    } catch (error) {
        console.error('Error al registrar pedido:', error);
        res.status(500).send('Error al guardar el pedido');
    }
}

module.exports = {
    registrarPedido
};