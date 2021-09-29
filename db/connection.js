const { Sequelize } = require('sequelize');

const db = new Sequelize('pyt','postgres','root', {
    host:'localhost',
    dialect: 'postgres'
});

module.exports = db;