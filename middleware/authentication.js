const authModel = require('../db/authModel')

const authenticateOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/,/)[0] : req.connection.remoteAddress
    
    const origins = await authModel.find({}).lean().exec();
    
    if(origins.filter(element => element.origin === ip).length > 0){
        console.log("the origin of the request has been authorised");
        next()
    }else{
        console.log("request unauthorised from origin : " + ip)
        res.send("unauthorised");
    }
}

module.exports = authenticateOrigin;