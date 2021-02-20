const mongoose = require('mongoose')
const db = require('./init')
const connection = db

const authSchema = mongoose.Schema({
    origin:String
},{collection:'hardwareexternalorigins'})

const authModel = connection.model('hardwareexternalorigins', authSchema)

module.exports = authModel