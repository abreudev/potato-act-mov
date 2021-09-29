const { request ,response } = require('express');
const Movie = require('../models/movie');

const moviesGet = async (req = request, res = response) => {
    const movie = await Movie.findAll();
    res.json(movie)
}
const movieGet = async (req = request, res = response) => {
    const { id } = req.params
    const movie = await Movie.findByPk( id );
    if ( movie ) {
        res.json(movie);
    } else {
        res.status(404).json({
            msg: 'Not found'
        })
    }   
}

const moviePost = async (req = request, res = response) => {
    const { body } = req;
    try {
        const movie = new Movie(body);
        await movie.save();
        res.json( movie );

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error fields'
        })
    }
}

const moviePut = async (req = request, res = response) => {
    const { id } =  req.params;
    const { body } = req;
    try {
        const movie = await Movie.findByPk( id );
        if ( !movie ){
            res.status(404).json({
                msg:'Bad id movie'
            })
        }
        await movie.update( body )

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error fields'
        })
    }
}

module.exports = {
    moviesGet,
    movieGet,
    moviePut,
    moviePost
}