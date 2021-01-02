const express = require('express');
const router = express.Router();
const data_post_service = require('../services/data_post_service');
const {customError, generateReturnError} = require('../utilities/errorHandler');
const fileName = 'data_post_router';

router.post('/post_building_data', async (req,res) =>{
    try{
        const response = await data_post_service.Post_building_data();
        res.send(response);
    }catch(e){
        const err = customError(e,e.code, fileName, 'post_building_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_room_data', async (req,res) =>{
    try{
        const response = await data_post_service.Post_room_data();
        res.send(response);
    }catch(e){
        const err = customError(e,e.code, fileName, 'post_room_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_sensor_data', async (req,res) =>{
    try{
        const response = await data_post_service.Post_sensor_data();
        res.send(response);    
    }catch(e){
        const err = customError(e,e.code,fileName,'post_sensor_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

module.exports = router;