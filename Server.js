const express = require('express')
const bodyParser = require('body-parser')
const rotas = require('./app/routes/')
require('./app/database/')

class Server {
    constructor(){
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(rotas.router)
    }

    start(){
        this.app.listen(3000, ()=> console.log('servidor rodando na porta 3000'))
    }
    
}



module.exports = new Server
