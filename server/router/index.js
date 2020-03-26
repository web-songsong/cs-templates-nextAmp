const Express = require('express')
const router = new Express.Router()
const routerApis = require('./router-apis')
routerApis(router)
module.exports = router
