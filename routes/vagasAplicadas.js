const { Router } = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = Router();
const mysql = require("../config/bd")
// import axios from "axios"

router.get('/', async(req,res)=>{
    res.render('vagasAplicadas')
})

router.get('/todas', async (req, res) =>{

    try{

        const data = await mysql.raw(`SELECT FROM VAGAS_APLICADAS`)
    }
    catch{

    }
})

module.exports = router;