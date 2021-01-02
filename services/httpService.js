var request = require('request');
const {getError} = require('../utilities/errorHandler')
const fileName = 'httpService';

const postRequest = ((url,params,body) =>{
    try{
        return new Promise((resolve, reject) =>{
            request.post(
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
        return getError(e,e.code, fileName, 'postRequest');
    }
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