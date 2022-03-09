const { Router } = require('express')
const LoginRoute = require('./login')
const MenuRouter = require('./menu')
const PerfilRouter = require('./perfil')
const VagasRouter = require('./vagas')
const VagasAplicadasRouter = require('./vagasAplicadas')
const sobreRouter = require('./sobre')
const ConfiguracaoRouter = require('./configuracao')




const router = Router()

router.use('/login', LoginRoute)
router.use('/menu', MenuRouter)
router.use('/perfil', PerfilRouter)
router.use('/vagas', VagasRouter)
router.use('/vagasAplicadas', VagasAplicadasRouter)
router.use('/sobre', sobreRouter)
router.use('/configuracao', ConfiguracaoRouter)

module.exports = router;