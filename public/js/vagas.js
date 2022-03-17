document.getElementById('botaoSalvar').addEventListener('click', async (e) => {
    e.preventDefault();

    try{

        const NOME_VAGA = document.getElementById('nome_vaga').value
        const SALARIO_VAGA = document.getElementById('salario_vaga').value
        const NOME_EMPRESA = document.getElementById('nome_empresa').value
        const CIDADE_VAGA = document.getElementById('cidade_vaga').value
        const DESCRICAO_VAGA = document.getElementById('descricao_vaga').value


        const data = await axios.get(`/vagas/${NOME_VAGA}/${NOME_VAGA}/${NOME_EMPRESA}/${CIDADE_VAGA}/${DESCRICAO_VAGA}`)
        console.log(data)
        
        console.log("aaaaaqqqqq")
        window.location.href = '/vagas'
    }

    catch(error){
        console.log(error.response)
        if(error.response.status === 401)
        alert(error.response.data)
    }
})