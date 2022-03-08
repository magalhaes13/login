document.getElementById('botaoSalvar').addEventListener('click', async (e) => {
    e.preventDefault();

    try{

        const usuario = document.getElementById('usuario').value
        const senha = document.getElementById('senha').value
        
        const data = await axios.get(`buscar/${usuario}/${senha}`)
        console.log(data)
        
        console.log(usuario,senha)
    }

    catch(error){
        console.log(error.response)
        if(error.response.status === 401)
        alert(error.response.data)
    }
})