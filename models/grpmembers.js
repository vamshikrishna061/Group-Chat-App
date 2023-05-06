const Sequelize = require('sequelize');

const sequelize = require('../utli/database');

const groupmembers = sequelize.define('groupmembers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull:false
    }
});

module.exports = groupmembers;