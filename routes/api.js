const express = require('express')
const controller = require('../controllers/api')
const router = express.Router()

// POST localhost:5000/api/login
router.post('/login', controller.login)

// POST localhost:5000/api
router.post('/', controller.api)

// GET localhost:5000/api/level
router.get('/level', controller.getLevel)


module.exports = router