const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Movie = db.define('movie',{
    title:{
        type: DataTypes.STRING
    },
    relase: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    }
});

module.exports = Movie;