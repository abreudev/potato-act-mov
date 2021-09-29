const { request ,response } = require('express');
const Movie = require('../models/movie');
const Movonact = require('../models/movonact');

// obtener toda la relacion de actores
const movonactGets = async (req = request, res = response) => {
    const actonmovies = await Movonact.findAll();
    res.json(actonmovies)
}
// obtener uno de la pelicula
const movonactGet = async (req = request, res = response) => {
    const { id_mov } = req.params
    if (Number(id_mov)){
        const actonmov = await Movonact.findAll({
            attributes:['id_mov','name_act'],
            where:{
                id_mov
            }
        });
        let id = Number(id_mov)
        const aom_name = await Movie.findAll({
            attributes:['title','photo'],
            where:{
                id
            }
        });
        if ( actonmov && aom_name ) {
            res.json({
                aom_name,
                actonmov
            });
        } else {
            res.status(404).json({
                msg: 'Not found'
            })
        }
    } else{
        return res.status(400).json({
            msg:'Bad request'
        })
    }
}
// Crear relacion de pelicula
const movonactPost = async (req = request, res = response) => {
    const { body } = req;
    try {
        const actonmov = new Actonmov(body);
        await actonmov.save();
        res.json( actonmov );

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error fields'
        })
    }
}
// Modificar
const movonactPut = async (req = request, res = response) => {
    const { id_act } =  req.params;
    if(Number(id_act)){
        const { body } = req;
        try {
            const actonmov = await Actonmov.findByPk( id_act );
            if ( !actonmov ){
                return res.status(404).json({
                    msg:'Bad id actonmov'
                })
            }
            await actonmov.update( body )
    
        } catch (error) {
            console.log(error);
            res.status(404).json({
                msg: 'Error fields'
            })
        }
    } else {
        return res.status(400).json({
            msg:'Bad request'
        })
    }
}
// Borrar
const movonactDelete = async (req = request, res = response) => {
    const { id_act } =  req.params;
    if(Number(id_act)){
        const actonmov = await Actonmov.findByPk( id_act );
        if ( !actonmov ){
            return res.status(404).json({
                msg:'Bad id actonmov'
            })
        }
        await actonmov.destroy();
        res.json(actonmov)
    } else {
        return res.status(400).json({
            msg:'Bad request'
        })
    }
}

module.exports = {
    movonactGets,
    movonactGet,
    movonactPost,
    movonactPut,
    movonactDelete
}