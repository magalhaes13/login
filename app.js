
// app.get('/ola/:nome/:cargo/:apelido', function(req,res){
//     res.send("<h1>Ola "+req.params.nome+"</h1>" + "<h2> Seu cargo eh: "+req.params.cargo+ "</h2>" + "<h3> Sua cor favorida eh: "+req.params.apelido+ "</h3>");
// });

const express = require('express');
const app = express();
const routes = require("./routes/routes")

app.get('/', function(req,res){
    res.send("sem nddddd");
});

app.use('/', routes)









app.listen(8081, function(){
    console.log("Servidor rodando");
});