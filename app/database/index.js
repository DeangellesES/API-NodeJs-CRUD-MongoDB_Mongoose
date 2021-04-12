const mongoose = require('mongoose')

mongoose.Promisse = global.Promise;

mongoose.connect('mongodb+srv://felipe:dev*********@servicos*******.zwrp4.mongodb.net/*********?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to database')
});

module.export = mongoose