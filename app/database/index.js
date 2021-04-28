const mongoose = require('mongoose')

mongoose.Promisse = global.Promise;

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connected to database')
});

module.export = mongoose