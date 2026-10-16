// el controlador recibe el pedido, lo revisa y lo manda a guardar
const pedidoModel = require('../Models/LpedidoModel');

async function registrarPedido(req, res) {
    try {
        // datos que llegan del formulario
        const cliente = req.body.cliente;
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const tamano = req.body.tamano;

        // si no marcó la casilla, el dato no llega, por eso se pone No
        const llevar = req.body.llevar ? 'Sí' : 'No';
        let observaciones = req.body.observaciones || '';

        // si eligió que no, no se guarda mensaje
        if (req.body.observacion === 'No') {
            observaciones = '';
        }

        // revisa que los datos sean válidos
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

        // guarda el pedido en la base de datos
        const id = await pedidoModel.registrarPedido(
            cliente.trim(),
            producto.trim(),
            cantidad,
            tamano.trim(),
            llevar,
            observaciones.trim()
        );

        // datos que se mandan a la página de resumen
        const parametros = new URLSearchParams({
            id: id,
            cliente: cliente.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            tamano: tamano.trim(),
            llevar: llevar,
            observaciones: observaciones.trim()
        });

        // lleva al usuario al resumen
        res.redirect('/Resumen.html?' + parametros.toString());
    } catch (error) {
        // si algo falla, se ve el error en la terminal
        console.error('Error al registrar pedido:', error);
        res.status(500).send('Error al guardar el pedido');
    }
}

module.exports = {
    registrarPedido
};