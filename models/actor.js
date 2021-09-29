const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Actor = db.define('actor',{
    fullname:{
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    }
});

module.exports = Actor;