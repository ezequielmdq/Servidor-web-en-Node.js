const pg = require('pg');

const { Client } = pg;

const client = new Client({
    user: 'postgres',
    password: 'reynor',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});

client.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Base de datos conectada');
});

module.exports = client;