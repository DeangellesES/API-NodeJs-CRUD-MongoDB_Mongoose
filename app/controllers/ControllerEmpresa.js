const empresasSchema = require('../models/Empresa')
const mongoose = require('mongoose')

class ControllerEmpresa {
    async cadastrarEmpresa (req, res){
        try{
            console.log(req.body)
            const {cnpj, razao, uf, usuario} = req.body;
            const validacnpj = await empresasSchema.find({cnpj : cnpj})
            //const uniqueUsuario = [...new Set(usuario)]            
            const myset = new Set()

            for(var i = 0; i < usuario.length; i++){                
                if(myset.has(usuario[i])){
                    return res.status(400).json({error : `${usuario[i]} já está cadastrado na empresa`})
                }else{
                    myset.add(usuario[i])
                }              
            }

            /*if(usuario.length !== uniqueUsuario.length){
                return res.status(400).json({error : 'não é possível cadastrar 2 usuários na mesma empresa'})
            }*/

            if(!cnpj){
                return res.status(400).json({error : 'cnpj obrigatório'})
            }
            
            if(!razao){
                return res.status(400).json({error : 'razao obrigatório'})
            }
            
            if(!uf){
                return res.status(400).json({error : 'uf obrigatório'})
            }
            
            if(validacnpj.length > 0){
                return res.status(400).json({error : 'cnpj já existe'})
            }
                            
            const empresa = await empresasSchema.create(req.body) 
            console.log(empresa)                             
            return res.send({empresa})
            
        }catch (err){
            return res.status(400).send({message})
        }
    }
    
    async atualizarEmpresa(req, res){
        try{            
            if(!(mongoose.Types.ObjectId.isValid(req.params.atualizaEmpresa))){
                return res.status(400).send({error :'Id inconrreto'})
            }
            
            const empresa = await empresaSchema.findByIdAndUpdate(req.params.atualizaEmpresa, req.body, {new: true})
            return res.send({empresa})
            
        }catch (err){
            return res.status(400).send({err})
        }
    }
    
    async consultarEmpresas(req, res){
        try{
            const empresas = await empresaSchema.find()        
            return res.send({empresas})
            
        }catch (err){
            return res.status(400).send({err})
        }
    }
    
    async consultarEmpresa(req, res){
        try{                
            if(!(mongoose.Types.ObjectId.isValid(req.params.consultaEmpresa))){
                return res.status(400).send({error : 'Id inconrreto'})
            }
            
            const empresa = await empresaSchema.findById(req.params.consultaEmpresa) 
            return res.send({empresa})                      
            
        }catch (err){
            return res.status(400).send({err})
        }
    }
    
    async consultarUsuariosEmpresa(req, res){
        try{                
            if(!(mongoose.Types.ObjectId.isValid(req.params.consultaUsuarioEmpresa))){
                return res.status(400).send({error : 'Id inconrreto'})
            }
            const idEmpresa = req.params.consultaUsuarioEmpresa
            const empresa = await empresasSchema.findById(idEmpresa).populate('usuario').lean()
            
            return res.send({empresa})                      
            
        }catch (err){
            return res.status(400).send({err})
        }
    }

    async deletarEmpresa(req, res){
        try{
            if(!(mongoose.Types.ObjectId.isValid(req.params.deletaEmpresa))){
                return res.status(400).send({error : 'Id inconrreto'})
            }
            const empresa = await empresasSchema.findById(req.params.deletaEmpresa)
            return res.send({empresa})
        }catch(err) {
            return res.status(400).send(err)
        }
    }
}

module.exports = new ControllerEmpresa;

