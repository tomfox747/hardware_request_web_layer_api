const express = require('express');
const router = express.Router();
const data_post_service = require('../services/data_post_service');

router.post('/post_building_data', async (req,res) =>{
    const response = await data_post_service.Post_building_data();
    res.send(response);
})

router.post('/post_room_data', async (req,res) =>{
    const response = await data_post_service.Post_room_data();
    res.send(response);
})

router.post('/post_sensor_data', async (req,res) =>{
    const response = await data_post_service.Post_sensor_data();
    res.send(response);
})

module.exports = router;