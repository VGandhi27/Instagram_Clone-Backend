const express = require('express')
const app=express()
const mongoose =require('mongoose')
const PORT = 4000
// const {MONGOURI}=require("./dev")

const connectToMongo = require('./Key');
connectToMongo();

// mongoose.connect(MONGOURI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

require('./models/User')
require('./models/Post')


app.use(express.json())
app.use(require('./routes/Auth'))
app.use(require('./routes/Post'))
app.use(require('./routes/User'))


app.listen(PORT,()=>{
    console.log(`Instagram Backend Server is running on PORT ${PORT}`);
})