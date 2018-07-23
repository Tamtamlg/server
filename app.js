const express = require('express')
const bodyParser = require('body-parser');
const cors = require ('cors')
const morgan = require ('morgan')

const apiRoutes = require('./routes/api')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors)

app.use('/api', apiRoutes)


module.exports = app