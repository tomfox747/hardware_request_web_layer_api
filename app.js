const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const healthCheck = require('./routers/healthCheck');
const data_post_router = require('./routers/data_post_router');

const authOrigin = require('./middleware/authentication');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/healthCheck', healthCheck);
app.use('/web/data', authOrigin, data_post_router);

module.exports = app;