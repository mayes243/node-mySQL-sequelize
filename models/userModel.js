module.exports = (sequelize, DataTypes) => {
    // create a User table
    const User = sequelize.define("User", { // User is the table name 
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING
        },
        info: {
            type: DataTypes.TEXT
        },
    })
    return User;
}