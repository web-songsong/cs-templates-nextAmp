const Express = require('express')
const router = new Express.Router()

router.get('/test-api', require('./test-api'))

router.get('/mock-api', require('./mock-api'))

module.exports = router
