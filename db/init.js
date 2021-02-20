const init = require('./connect')
//create config file env for connection string
const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const dbName = "authentication"

const dbManager = init(connectionString, dbName)

module.exports = dbManager