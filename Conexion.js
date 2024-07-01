const pg = require('pg');

const { Cliente } = pg;

const cliente = new Cliente({
    user: 'postgres',
    password: 'reynor',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});

cliente.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Base de datos conectada');
});

module.exports = cliente;