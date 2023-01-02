const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/crud-test"

const connectToMongo =()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo Successfully!!!");
    })
}
const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Connected to DATABASE'))

module.exports = connectToMongo;