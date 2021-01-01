var request = require('request');

const postRequest = ((url,params,body) =>{
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
})

const getRequest = ((url,params,body) =>{
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
})

module.exports = {
    get: getRequest,
    post: postRequest
}