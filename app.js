const express = require('express')
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes)


module.exports = app