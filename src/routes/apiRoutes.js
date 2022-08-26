const router = require('express').Router()
const api = require('../controllers/apiControllers')

router.get('/users', api.getusers)
router.post('/users', api.postUser)
router.post('/users/:username/messages', api.postMessage)

module.exports = router
