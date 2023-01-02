const connectToMongo = require('./db');
const express = require('express'); 

connectToMongo();

const app = express() 
const PORT = 3000

app.use(express.json())
app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))

const testRouter = require('./routes/api')
app.use('/api', testRouter)