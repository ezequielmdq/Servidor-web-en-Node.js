const express = require('express');
//const pg = require('./Conexion.js');
const estudiantesRoutes = require('./Routes/estudiantesRoutes.js');
const profesoresRoutes = require('./Routes/profesoresRoutes.js'); 

const servidor = express();

servidor.get('/', (req, res) => {
    res.send('Hola mundo.');
})

servidor.use("/estudiantes", estudiantesRoutes);
servidor.use("/profesores", profesoresRoutes);

servidor.listen(3000, () => {
    console.log('Servidor activo.')
});

