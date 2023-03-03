const { Sequelize, DataTypes } = require('sequelize');

const dbConfig = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases : 0 => Remove the unwanted console
    operatorsAliases: 0, // true and false also acceptable

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

sequelize.authenticate()
    .then(() => console.log("Mongodb connection SUCCESS ⭐"))
    .catch(err => console.log("Mongodb connection FAIL 💥" + err))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Tables
db.User = require('./userModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => console.log('yes re-sync done! ✅'))
    .catch(err => console.error('Unable to re-sync table: ❌', err));

module.exports = db; 