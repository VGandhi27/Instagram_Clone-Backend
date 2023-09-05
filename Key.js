const { default: mongoose } = require('mongoose');
 
 
 const moongoose=require('mongoose');
 
 
//  const mongoURI ="mongodb://localhost:27017/inotebook"
 const mongoURI ="mongodb+srv://Vidushi:EUltk96CrFcClKCi@cluster0.u1sord4.mongodb.net/?retryWrites=true&w=majority"
  

 const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
 }

 module.exports = connectToMongo;