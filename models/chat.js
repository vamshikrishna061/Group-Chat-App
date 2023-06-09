const Sequelize = require('sequelize');
const sequelize = require('../utli/database');

const chat = sequelize.define('chat', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNul: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNul: false,
    },  
    groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});


module.exports = chat;