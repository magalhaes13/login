const { Router } = require('express')
const LoginRoute = require('./login')
const router = Router()

router.use('/login', LoginRoute)

module.exports = router;