const httpService = require('./httpService');
const get = httpService.get;
const post = httpService.post;

const post_building_data = async () =>{
    const response = await post('http://localhost:7071/inner/data/post_building_data');
    return response;
}

const post_room_data = async () =>{
    const response = await post('http://localhost:7071/inner/data/post_room_data');
    return response;
}

const post_sensor_data = async () =>{
    const response = await post('http://localhost:7071/inner/data/post_sensor_data');
    return response;
}

module.exports = {
    Post_building_data: post_building_data,
    Post_room_data: post_room_data,
    Post_sensor_data: post_sensor_data
}