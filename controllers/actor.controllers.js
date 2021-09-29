const { request ,response } = require('express')
const Actor = require('../models/actor')

// obtener varios actores
const actorsGet = async (req = request, res = response) => {
    const actor = await Actor.findAll();
    res.json(actor)
}
// obtener un actor
const actorGet = async (req = request, res = response) => {
    const { id } = req.params
    const actor = await Actor.findByPk( id );
    if ( actor ) {
        res.json(actor);
    } else {
        res.status(404).json({
            msg: 'Not found'
        })
    }
}
// Crear un actor
const actorPost = async (req = request, res = response) => {
    const { body } = req;
    try {
        const actor = new Actor(body);
        await actor.save();
        res.json( actor );

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error fields'
        })
    }
}
// Modificar un actor
const actorPut = async (req = request, res = response) => {
    const { id } =  req.params;
    const { body } = req;
    try {
        const actor = await Actor.findByPk( id );
        if ( !actor ){
            res.status(404).json({
                msg:'Bad id actor'
            })
        }
        await actor.update( body )

    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error fields'
        })
    }
}

module.exports = {
    actorsGet,
    actorGet,
    actorPut,
    actorPost
}