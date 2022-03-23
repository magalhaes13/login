mostrarPerfil();

async function mostrarPerfil(){

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