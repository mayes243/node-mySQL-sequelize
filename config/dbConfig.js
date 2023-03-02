module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'node_sequelize_db',
    dialect: 'mysql',

    // CONNECTION LIMITATION (OPTIONAL)
    pool: {
        max: 5, // maximum
        min: 0, // minimun
        acquire: 30000, // time acquired
        idle: 10000 // idle time for database
    }
}