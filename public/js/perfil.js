mostrarPerfil();

async function mostrarPerfil() {
  try {
    const data = await axios.get("/perfil");
    console.log(data.data[0]);

    $("#dadosPerfil").empty();
    for (const item of data.data[0]) {
      $("#dadosPerfil").append(
        `<input class="dadosPerfil" type="text" size="50" placeholder="Nome Completo">`
      );
    }
  } catch (ERROR) {
    console.log(ERROR);
  }

  try {
    const idPerfil = document.getElementById("idPerfil").value;

    if (idPerfil !== "") {
      const inputs = document.getElementsByClassName("dadosPerfil");

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
    }
  } catch (ERROR) {
    console.log(ERROR);
  }
}

async function savePerfil() {
  try {
    let dataPerfil = {
      IDPERFIL: "",
      NOME: "",
      CPF: "",
      EMAIL: "",
      RG: "",
      SEXO: "OUTROS",
      DATANASCIMENTO: "",
      CEP: "",
      LOGRADOURO: "",
      NUMERO: "",
      BAIRRO: "",
      ESTADO: "",
      COMPLEMENTO: "",

   };

    dataPerfil.NOME = document.getElementById("nomeCompleto").value;
    dataPerfil.CPF = document.getElementById("cpf").value;
    dataPerfil.EMAIL = document.getElementById("email").value;
    dataPerfil.RG = document.getElementById("rg").value;
    dataPerfil.SEXO = getValueRadio();
    dataPerfil.DATANASCIMENTO = document.getElementById("data").value;
    dataPerfil.CEP = document.getElementById("cep").value;
    dataPerfil.LOGRADOURO = document.getElementById("logradouro").value;
    dataPerfil.NUMERO = document.getElementById("numero").value;
    dataPerfil.BAIRRO = document.getElementById("bairro").value;
    dataPerfil.ESTADO = document.getElementById("uf").value;
    dataPerfil.COMPLEMENTO = document.getElementById("complemento").value;


    console.log(dataPerfil);

    const {data} = await axios.post("/perfil/meuPerfil",dataPerfil)
    console.log(data)

  } catch (error) {
    console.log(error);
  }
}

function getValueRadio() {
  if (document.getElementById("op1").checked === true) {
    return document.getElementById("op1").value;
  } else if (document.getElementById("op2").checked === true) {
    return document.getElementById("op2").value;
  } else {
    return document.getElementById("op3").value;
  }
}



// const data = await axios.get("/perfil/meuPerfil")
// console.log(data.data[0]);
