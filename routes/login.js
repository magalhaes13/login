const { Router } = require('express')
const router = Router();
const mysql = require("../config/bd")
// import axios from "axios"

router.get('/', async(req,res)=>{
    res.render('login')
})

router.get('/buscar/:usuario/:senha', async (req, res) => {          //get: buscar  ////  
                                                                    //async: significa que o valor de retorno da função será, "por baixo dos panos", uma Promise
    try {                                                           //await: esperar
        const { usuario, senha } = req.params
        const data = await mysql.raw(`SELECT * FROM LOGIN WHERE USUARIO = '${usuario}' and SENHA = '${senha}'`)
        if(data[0].length === 0)       //length: conta quantas posições tem um array
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

































// router.put('/atualizar/:id', async (req, res) => {       //atualizar
//     return res.send('adasas');
// });

// router.delete('/delete/:id', async (req, res) => {    //delete
//     return res.send('sdgdsfg');
// });

//////////////////////////////////////////////////////////
//EXEMPLO FRONT


// const teste = {
//     usuario: "arthur",
//     senha: "123",
//     id: "1"
// }

// async function buscarLogin(){
//     const {data} = await axios.get("/teste")
//     return data;
// }

// async function salvarLogin(){                           
//     const {data} = await axios.post("/salvar", teste)               //corpo 
//     return data;
// }

// async function atualizarLogin(){
//     const {data} = await axios.put(`/atualizar/${teste.id}`)        //parametros
//     return data;
// }

// async function deletarLogin(){
//     const {data} = await axios.delete(`/delete/${teste.id}`)        //parametros
//     return data;
// }

// function saveUpdate(){
//     if(teste.id === "" || teste.id === null)
//     salvarLogin()
//     else
//     atualizarLogin()
// }


/////////////////////////////////////////////////////////

module.exports = router;