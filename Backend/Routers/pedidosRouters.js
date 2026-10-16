const express = require('express');
const router = express.Router();

const pedidosController = require('../Controllers/LpedidosController');

// cuando el formulario se envía a /pedido, se registra el pedido
router.post('/pedido', pedidosController.registrarPedido);

module.exports = router;