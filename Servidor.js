const express = require('express');

const servidor = express();

servidor.get('/', (req, res) => {
    res.send('Hola mundo.');
})

servidor.listen(3000, () => {
    console.log('Servidor activo.')
});