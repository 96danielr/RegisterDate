const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../utils/database.util');
//Define model
const Registrations = db.define('registrations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
});

//export
module.exports = { Registrations };
