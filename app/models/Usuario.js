const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,      
    },
    empresa: {        
        required: true,
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Empresa'     
    },
    senha : {
        type: String,
        required: true,     
    }   
},{timeStamps: true})

module.exports = mongoose.model('Usuario', usuarioSchema)