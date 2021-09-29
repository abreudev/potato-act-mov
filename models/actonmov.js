const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Actonmov = db.define('actonmov',{
    id_act: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_mov: {
        type: DataTypes.STRING
    },
    name_act: {
        type: DataTypes.STRING
    },
    title_mov: {
        type: DataTypes.STRING
    }
});

module.exports = Actonmov;