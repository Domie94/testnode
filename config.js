'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE,DATABASE2, SQL_SERVER, SQL_PORT} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE+'#'+DATABASE2,
        user: SQL_USER,
        password: SQL_PASSWORD+'#sql',
        port:parseInt(SQL_PORT),
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true,
            
        },
    },
};