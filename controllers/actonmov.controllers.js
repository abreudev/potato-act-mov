const { request ,response } = require('express');
const Actor = require('../models/actor');
const Actonmov = require('../models/actonmov');

// obtener toda la relacion de actores
const actonmovGets = async (req = request, res = response) => {
    const actonmovies = await Actonmov.findAll();
    res.json(actonmovies)
}
// obtener uno del actor
const actonmovGet = async (req = request, res = response) => {
    const { id_act } = req.params
    if(!Number(id_act)){
        return res.status(400).json({
            msg:'Bad Request'
        })
    }
    const actonmov = await Actonmov.findAll({
        attributes:['id_mov','title_mov'],
        where:{
            id_act
        }
    });
    let id = Number(id_act)
    const aom_name = await Actor.findAll({
        attributes:['fullname','photo'],
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
}
// Crear relacion de actor
const actonmovPost = async (req = request, res = response) => {
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
const actonmovPut = async (req = request, res = response) => {
    const { id_act } =  req.params;
    if(!Number(id_act)){
        return res.status(400).json({
            msg:'Bad Request'
        })
    }
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
}
// Borrar
const actonmovDelete = async (req = request, res = response) => {
    const { id_act } =  req.params;
    if(!Number(id_act)){
        return res.status(400).json({
            msg:'Bad Request'
        })
    }
    const actonmov = await Actonmov.findByPk( id_act );
    if ( !actonmov ){
        return res.status(404).json({
            msg:'Bad id actonmov'
        })
    }
    await actonmov.destroy();
    res.json(actonmov)
}

module.exports = {
    actonmovGets,
    actonmovGet,
    actonmovPost,
    actonmovPut,
    actonmovDelete
}