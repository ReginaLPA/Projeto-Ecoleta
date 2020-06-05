const express = require("express")  //inicializando o express
const server = express()  //executa a função express no servidor

// configurar pasta publica
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//configurar caminho da minha aplicação
//pagina inicial
//rota 
/*
server.get("/",(req,res)=>{
    res.sendFile(__dirname +"/views/index.html")
})

server.get("/create-point",(req,res)=>{
    res.sendFile(__dirname +"/views/create-point.html")
})
server.get("/search",(req,res)=>{
    res.sendFile(__dirname +"/views/search.html")
})
*/
//redereizar com nunjucks
server.get("/",(req,res)=>{
   return res.render("index.html")
})

server.get("/create-point",(req,res)=>{
   return res.render("create-point.html")
})

server.get("/search",(req,res)=>{
   return res.render("search.html")
})

//ligar o servidor
server.listen(3000)
