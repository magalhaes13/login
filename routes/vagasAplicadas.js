const { Router } = require('express')
const router = Router();
// import axios from "axios"

router.get('/', async(req,res)=>{
    res.render('vagasAplicadas')
})

module.exports = router;