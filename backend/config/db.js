import {Pool} from 'pg';
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '123456',
    database: 'proyectopevn'
});

module.exports pool;
