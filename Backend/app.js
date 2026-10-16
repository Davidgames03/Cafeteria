const express = require('express');
const path = require('path');

// lee el archivo .env con el puerto y los datos de la base
require('dotenv').config();

const pedidosRouters = require('./Routers/pedidosRouters');

const app = express();

// para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// carpeta donde están las páginas (html, css y js)
app.use(express.static(path.join(__dirname, '../Frontend')));

// rutas de los pedidos
app.use(pedidosRouters);

// ruta de prueba para ver que el servidor funciona
app.get('/', (req, res) => {
    res.send('Hola mundo desde el backend');
});

// enciende el servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutandose en el puerto ' + process.env.PORT);
});