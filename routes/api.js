const express = require('express')
const controller = require('../controllers/api')
const router = express.Router()

// localhost:5000/api/login
router.post('/login', controller.login)

// localhost:5000/api/auth/register
router.post('/', controller.api)


module.exports = router