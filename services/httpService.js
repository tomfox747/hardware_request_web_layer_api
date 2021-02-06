const axios = require('axios');
var request = require('request');
const {getError} = require('../utilities/errorHandler')
const fileName = 'httpService';

const postRequest = ( async (url,params,body) =>{
    let responseObject = {
        statusCode:null,
        data:null
    }
    await axios.post(url,body)
    .then((res) =>{
        responseObject.statusCode = res.status
    })

    return responseObject
}) 

const getRequest = ((url,params,body) =>{
    try{
        return new Promise((resolve, reject) =>{
            request.get(
                url,
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        resolve(body);
                    }
                    reject('error');
                }
            );
        })
    }catch(e){
        return getError(e,e.code, fileName, 'getRequest');
    }
})

module.exports = {
    get: getRequest,
    post: postRequest
}