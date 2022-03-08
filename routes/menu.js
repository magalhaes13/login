const { Router } = require('express')
const router = Router();
const mysql = require("../config/bd")
// import axios from "axios"

router.get('/', async(req,res)=>{
    res.render('menu')
})

router.get('/dfdfd', async (req, res) => {          //get: buscar  ////  
                                                                    //async: significa que o valor de retorno da função será, "por baixo dos panos", uma Promise
    try {                                                           //await: esperar
        const { usuario, senha } = req.params
        const data = await mysql.raw(`SELECT * FROM LOGIN WHERE USUARIO = '${usuario}' and SENHA = '${senha}'`)
        if(data[0].length === 0 )       //length: conta quantas posições tem um array
        {
            return res.status(401).send("Usuário não encontrado")    
        }

        return res.status(200).json(data[0])    
    }
    catch(error) {
        console.log(error)
        return res.status(500).send("Login inválido")     

    }
});

module.exports = router;