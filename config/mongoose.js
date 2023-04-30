const mongoose = require('mongoose')


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the  databasef");
});