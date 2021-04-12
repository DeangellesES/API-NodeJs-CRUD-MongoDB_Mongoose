const usuarioSchema = require('../models/Usuario')
const mongoose = require('mongoose')

class ControllerUsuario{
    async cadastrarUsuario(req, res){      
        try{
            console.log(req.body)
            const {nome, email, empresa, senha} = req.body;                   

            if(!nome){
                return res.status(400).send({error :'nome é obrigatórios'})
            }

            if(!email){
                return res.status(400).send({error :'email é obrigatórios'})
            }

            if(!empresa){
                return res.status(400).send({error :'empresa é obrigatório'})
            }

            if(!senha){
                return res.status(400).send({error :'senha é obrigatório'})
            }
                                
            const user = await usuarioSchema.create(req.body)               
            return res.send({user})
                        
        }catch (err){
            return res.status(400).send({err})
        }
    }
    
    async atualizarUsuario(req, res){
        try{       
            if(!(mongoose.Types.ObjectId.isValid(req.params.atualizaUsuario))){
                return res.status(400).send({error :'Id inconrreto'})
            }                  

            const user = await usuarioSchema.findByIdAndUpdate(req.params.atualizaUsuario, req.body, {new: true})                
            return res.send({user})
                       
        }catch (err){
            return res.status(400).send({error :'Atualização falhou'})
        }
    }
    
    async consultarUsuarios(req, res){
        try{
            const usuarios = await usuarioSchema.find()        
            return res.send({usuarios})
            
        }catch (err){
            return res.status(400).send({error :"Consulta falhou."})
        }
    }
    
    async consultarUsuario(req, res){
        try{
            if(!(mongoose.Types.ObjectId.isValid(req.params.consultaUsuario))){
                return res.status(400).send({error :'Id inconrreto'})
            }
            
            const usuario = await usuarioSchema.findById(req.params.consultaUsuario).populate('empresa')                     
            return res.send({usuario})
            
        }catch (err){
            return res.status(400).send({error :'Consulta falhou'})
        }
    }

    async deletarUsuario(req, res){
        try{
            if(!(mongoose.Types.ObjectId.isValid(req.params.deletaUsuario))){
                return res.status(400).send({error : 'Id inconrreto'})
            }
            const usuario = await usuarioSchema.findById(req.params.deletaUsuario)
            return res.send({usuario})
        }catch(err) {
            return res.status(400).send(err)
        }
    }
}

module.exports = new ControllerUsuario;
