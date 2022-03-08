const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        port:3306,
        password: '123456',
        database: 'sistemaweb',
    }
});



module.exports = knex;