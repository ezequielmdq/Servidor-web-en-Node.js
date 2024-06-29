const express = require('express');
const pg = require('../Servidor-web-en-Node.js/Conexion.js');

const servidor = express();

servidor.get('/', (req, res) => {
    res.send('Hola mundo.');
})

servidor.listen(3000, () => {
    console.log('Servidor activo.')
});

