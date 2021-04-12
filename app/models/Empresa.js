const mongoose = require('mongoose') 

const empresasSchema = new mongoose.Schema({
    cnpj: {
        type: String,
        required: false,
    },
    razao: String,
    uf: {
        type: String,
        required: false
    },    
    usuario: [{    
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario'     
    }]
},{timeStamps: true})

module.exports =  mongoose.model('Empresas', empresasSchema)
