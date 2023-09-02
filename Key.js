if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}

// module.exports={
//     MONGOURI:"mongodb+srv://Vidushi:EUltk96CrFcClKCi@cluster0.u1sord4.mongodb.net/?retryWrites=true&w=majority",
//     JWT_SECRET:"gdjhvvdhjdbvxvjLsasdhpdbsbshshsbwey"

// }