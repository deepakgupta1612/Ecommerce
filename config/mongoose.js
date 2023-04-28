const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://anjugupta9213:Dg1612991985%40@cluster0.a104kkq.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the databasef");
});