const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Movonact = db.define('actonmov',{
    id_act: {
        type: DataTypes.STRING
    },
    id_mov: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name_act: {
        type: DataTypes.STRING
    },
    title_mov: {
        type: DataTypes.STRING
    }
});

module.exports = Movonact;