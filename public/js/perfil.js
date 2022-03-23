mostrarPerfil();

async function mostrarPerfil(){


    try{
        const data = await axios.get("/perfil/meuPerfil")
        console.log(data.data[0]);

        $('#dadosPerfil').empty()
        for(const item of data.data[0]){
            $('#dadosPerfil').append(
                `<input class="dadosPerfil" type="text" size="50" placeholder="Nome Completo">`
            )
        }

    }
    catch(ERROR){
        console.log(ERROR);
    }

    

    try{
        const idPerfil = document.getElementById("idPerfil").value;

        if(idPerfil !== ""){
            
            const inputs = document.getElementsByClassName("dadosPerfil");

            for(var i = 0; i<inputs.length; i++){
                inputs[i].disabled = true;
            }
        }
    }
    catch(ERROR){
        console.log(ERROR);
    }
}


        // const data = await axios.get("/perfil/meuPerfil")
        // console.log(data.data[0]);