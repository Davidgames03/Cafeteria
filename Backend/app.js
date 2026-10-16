const express = require('express');
const path = require('path');

require('dotenv').config();

const pedidosRouters = require('./Routers/pedidosRouters');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Frontend')));
app.use(pedidosRouters);

app.get('/', (req, res) => {
    res.send('Hola mundo desde el backend');
});

app.listen(process.env.PORT, () => {
    console.log('Servidor ejecutandose en el puerto ' + process.env.PORT);
});