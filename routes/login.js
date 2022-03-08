const { Router } = require('express')
const router = Router();
// import axios from "axios"

router.post('/salvar', async (req, res) => {        //salvar
    return res.send('telaaaaaaa');
});

router.get('/buscar', async (req, res) => {          //buscar
    return res.send('123');
});

router.put('/atualizar/:id', async (req, res) => {       //atualizar
    return res.send('adasas');
});

router.delete('/delete/:id', async (req, res) => {    //delete
    return res.send('sdgdsfg');
});

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