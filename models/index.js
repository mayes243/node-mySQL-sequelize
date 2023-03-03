const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const dbConfig = require('../config/dbconfig.json')[env];

const sequelize = new Sequelize({
    ...dbConfig,
    // operatorsAliases : 0 => Remove the unwanted console
    operatorsAliases: 0, // true and false also acceptable

    // CONNECTION LIMITATION (OPTIONAL)
    pool: {
        max: 5, // maximum
        min: 0, // minimun
        acquire: 30000, // time acquired
        idle: 10000 // idle time for database
    }
});

sequelize.authenticate()
    .then(() => console.log("Mongodb connection SUCCESS ⭐"))
    .catch(err => console.log("Mongodb connection FAIL 💥" + err))

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Tables
db.User = require('./userModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => console.log('yes re-sync done! ✅'))
    .catch(err => console.log('Unable to re-sync table: ❌', err));

module.exports = db;