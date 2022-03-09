document.getElementById('botaoSalvar').addEventListener('click', async (e) => {
    e.preventDefault();

    try{

        const usuario = document.getElementById('usuario').value
        const senha = document.getElementById('senha').value
        
        if(usuario === "" || senha===""){
            return alert("Preencha usuário e senha");
        }

        const data = await axios.get(`/login/buscar/${usuario}/${senha}`)
        console.log(data)
        
        console.log(usuario,senha)
        window.location.href = '/menu'
    }

    catch(error){
        console.log(error.response)
        if(error.response.status === 401)
        alert(error.response.data)
    }
})