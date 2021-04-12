const express = require('express')
const ControllerUsuario = require ("../controllers/ControllerUsuario")
const ControllerEmpresa = require ("../controllers/ControllerEmpresa")

class Rotas{
    constructor(){
        this.router = express.Router()
        this.router.post('/cadastroUsuario', ControllerUsuario.cadastrarUsuario)
        this.router.put('/atualizaUsuario/:atualizaUsuario', ControllerUsuario.atualizarUsuario)
        this.router.get('/consultaUsuarios', ControllerUsuario.consultarUsuarios)
        this.router.get('/consultaUsuario/:consultaUsuario', ControllerUsuario.consultarUsuario)
        this.router.delete('/deletaUsuario/:deletaUsuario', ControllerUsuario.deletarUsuario)
        this.router.post('/cadastroEmpresa', ControllerEmpresa.cadastrarEmpresa)
        this.router.put('/atualizaEmpresa/:atualizaEmpresa', ControllerEmpresa.atualizarEmpresa)
        this.router.get('/consultaEmpresas', ControllerEmpresa.consultarEmpresas)
        this.router.get('/consultaEmpresa/:consultaEmpresa', ControllerEmpresa.consultarEmpresa)
        this.router.delete('/deletaEmpresa/:deletaEmpresa', ControllerEmpresa.deletarEmpresa)
        this.router.get('/consultaUsuarioEmpresa/:consultaUsuarioEmpresa', ControllerEmpresa.consultarUsuariosEmpresa)      
    }
}

module.exports = new Rotas