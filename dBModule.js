const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trafikskola', {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
});

exports.store = async (element) => {
    await element.save();
};