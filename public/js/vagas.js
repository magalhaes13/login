pesquisarVagas();

async function pesquisarVagas(){

    try{
        const data = await axios.get("/vagas/todas")
        console.log(data.data[0]);

        $('#texto').empty()
        for(const item of data.data[0]){
            $('#texto').append(
                `<div class="row">
                <div class="card green">
                  <h2> ${item.NOME_VAGA} </h2>
                  <p> ${item.DESCRICAO_VAGA} </p>
                  <img class="icon" src="assets/bandeira-brasil-redonda-png-Fundo-transparente-gratis-removebg-preview.png" alt="certo" />
                </div>
            
                </div>          
              </div>`
            )
        }

    }
    catch(ERROR){
        console.log(ERROR);
    }
}

























// try {

//     const NOME_VAGA = document.getElementById('nome_vaga').value
//     const SALARIO_VAGA = document.getElementById('salario_vaga').value
//     const NOME_EMPRESA = document.getElementById('nome_empresa').value
//     const CIDADE_VAGA = document.getElementById('cidade_vaga').value
//     const DESCRICAO_VAGA = document.getElementById('descricao_vaga').value


//     const data = await axios.get(`/vagas`)
//     console.log(data)

//     console.log("aaaaaqqqqq")
//     window.location.href = '/vagas'

// }

// catch (error) {
//     console.log(error.response)
//     if (error.response.status === 401)
//         alert(error.response.data)
// }
