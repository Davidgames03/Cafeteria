// conexión con MySQL
const mysql = require('mysql2/promise');

require('dotenv').config();

// abre la conexión con la base de datos usando los datos del .env
async function conexion() {
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)
    });

    return db;
}

module.exports = conexion;