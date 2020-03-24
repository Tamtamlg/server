const express = require('express')
const controller = require('../controllers/api')
const router = express.Router()

// GET localhost:5000/
router.get('/', controller.getPage)
// GET localhost:5000/about
router.get('/about', controller.getPage)
// GET localhost:5000/projects
router.get('/projects', controller.getPage)


module.exports = router