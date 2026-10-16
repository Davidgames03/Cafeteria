const express = require('express');
const router = express.Router();

const pedidosController = require('../Controllers/LpedidosController');

router.post('/pedido', pedidosController.registrarPedido);

module.exports = router;