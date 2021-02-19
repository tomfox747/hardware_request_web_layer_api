const mongoose = require('mongoose');

const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const databaseName = "authentication"

const authenticateOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/,/)[0] : req.connection.remoteAddress
    
    mongoose.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology: true, dbName: databaseName})

    mongoose.connection.on('connected', () =>{
        console.log("connection to the database made")
    })
    mongoose.connection.on('error', () =>{
        console.log("database connection error occured")
        process.exit(0)
    })

    const schema = mongoose.Schema({
        origin:String
    })   
    const originModel = mongoose.model('hardwareexternalorigins', schema)

    let result = await originModel.find({}).lean().exec();

    if(result.filter(element => element.origin === ip).length > 0){
        console.log("the origin of the request has been authorised");
        next()
    }else{
        console.log("request unauthorised")
        res.send("unauthorised");
    }

    delete mongoose.connection.models['hardwareexternalorigins']
}

module.exports = authenticateOrigin;