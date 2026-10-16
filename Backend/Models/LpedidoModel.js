const conexion = require('../Configuracion/database');

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

    await db.end();

    return resultado.insertId;
}

module.exports = {
    registrarPedido
};