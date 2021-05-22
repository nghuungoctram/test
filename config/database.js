const knex = require('knex');
const builder = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "19121999",
        database: "movie"
    },
    pool: { min: 0, max: 10 }
});

module.exports = builder;