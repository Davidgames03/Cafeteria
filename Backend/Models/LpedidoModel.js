const conexion = require('../Configuracion/database');

// guarda el pedido en la tabla pedidos y regresa su id
async function registrarPedido(cliente, producto, cantidad, tamano, llevar, observaciones) {
    const db = await conexion();
    const sql = `
        INSERT INTO pedidos (cliente, producto, cantidad, tamano, llevar, observaciones)
        VALUES (?,?,?,?,?,?)`;

    const [resultado] = await db.execute(sql, [
        cliente,
        producto,
        cantidad,
        tamano,
        llevar,
        observaciones
    ]);

    // cierra la conexión cuando termina
    await db.end();

    // id que la base le puso al pedido
    return resultado.insertId;
}

module.exports = {
    registrarPedido
};