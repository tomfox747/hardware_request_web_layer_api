const httpService = require('./httpService');
const get = httpService.get;
const post = httpService.post;
const {getError} = require('../utilities/errorHandler');
const fileName = 'data_post_service';

const post_building_data = async (building) =>{
    try{
        const response = await post('http://localhost:7071/inner/data/post_building_data',null,building);
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'post_building_data');
    }
}

const post_room_data = async (room) =>{
    try{
        const response = await post('http://localhost:7071/inner/data/post_room_data',null,room);
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'post_room_data');
    }
}

const post_sensor_data = async (sensor) =>{
    try{
        const response = await post('http://localhost:7071/inner/data/post_sensor_data',null,sensor);
        return response;
    }catch(e){
        return getError(e,e.code, fileName, 'post_sensor_data');
    }
    
}

const increment_room_population = async (buildingId, roomId) =>{
    try{
        const response = await post('http://localhost:7071/inner/data/increment_room_population',null,{buildingId:buildingId,roomId:roomId})
        return response
    }catch(e){
        return getError(e,e.code, fileName, 'increment_room_population')
    }
}

const decrement_room_population = async (buildingId, roomId) =>{
    try{
        const response = await post('http://localhost:7071/inner/data/decrement_room_population',null,{buildingId:buildingId,roomId:roomId})
        return response
    }catch(e){
        return getError(e,e.code,fileName,'decrement_room_population')
    }
}

module.exports = {
    Post_building_data: post_building_data,
    Post_room_data: post_room_data,
    Post_sensor_data: post_sensor_data,
    Increment_room_population: increment_room_population,
    Decrement_room_population: decrement_room_population
}