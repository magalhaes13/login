const { Router } = require('express')
const LoginRoute = require('./login')
const MenuRouter = require('./menu')

const router = Router()

router.use('/login', LoginRoute)
router.use('/menu', MenuRouter)

module.exports = router;