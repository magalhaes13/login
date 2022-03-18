const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();
const mysql = require("../config/bd")
// import axios from "axios"

router.get('/', async(req,res)=>{
    res.render('vagas')
})

router.get('/vagas', async (req, res) => {          //get: buscar  ////  
                                                                    //async: significa que o valor de retorno da função será, "por baixo dos panos", uma Promise
    try {                                                           //await: esperar
        const { ID_VAGAS} = res.params
        const data = await mysql.raw(`SELECT * FROM VAGAS WHERE ID_VAGAS = '${ID_VAGAS}'`)
    }
    catch(error) {
        console.log(error)
        return res.status(500).send("ERROR")     

    }
});


// router.get('/busca/total', async (req,res ) =>{




// })


module.exports = router;