const express = require('express');
const cors = require('cors');
const db = require('../db/connection');

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8088;
        this.actonmovPath = '/api/actonmov';
        this.movonactPath = '/api/movonact';
        this.actorPath = '/api/actor';
        this.moviePath = '/api/movie';
        // Using connection
        this.dbCon();
        // Middlewares
        this.middleware();
        // Routes
        this.routes();
    }

    // Connection to database
    async dbCon(){
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error(error);
        }
    }

    middleware(){
        // CORS
        this.app.use(cors())
        // Lectura y parse del body
        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use( this.actorPath, require('../routes/actor.routes'));
        this.app.use( this.moviePath, require('../routes/movie.routes'));
        this.app.use( this.actonmovPath, require('../routes/actonmov.routes'));
        this.app.use( this.movonactPath, require('../routes/movonact.routes'));
    }
    listen(){
        this.app.listen( this.port, () => {
            console.log('Server on port:', Number(this.port))
        });
    }
}


module.exports = Server;