const express = require('express');
const app = express();
const routes = require("./routes/routes")
const path = require('path')
const multer = require('multer')

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.send("sem nddddd");
});


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"upload/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage})

app.get("/",(req,res) =>{
    res.render("perfil");
})

app.post("/upload", upload.single("file"),(req,res) => {
    res.send("Arquivo recebido!");
})


console.log(path.join(__dirname, 'views'))

app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)


app.listen(8081, function(){
    console.log("Servidor rodando");
});