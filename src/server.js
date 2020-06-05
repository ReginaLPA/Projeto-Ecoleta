const express = require("express")  //inicializando o express
const server = express()  //executa a função express no servidor

//pegar o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

//habilitar o req body
server.use(express.urlencoded({extended: true}))

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


//rota create-point
server.get("/create-point",(req,res)=>{

    //console.log(req.query)

   return res.render("create-point.html")
})

server.post("/savepoint",(req,res)=>{

    console.log(req.body)
    const query = `
    INSERT INTO places(
        name,
        image,
        adress,
        adress2,
        state,
        city,
        items
    )VALUES(?,?,?,?,?,?,?);
`
   
const values = [
    req.body.name,
    req.body.image,
    req.body.adress,
    req.body.adress2,
    req.body.city,
    req.body.state,
    req.body.items

]

function afterInsertData(err){
    if(err){
        console.log(err)
        return res.send("Erro no cadastro!")
    }
    console.log("Cadastro com sucesso")
    console.log(this)

    return res.render("create-point.html",{saved:true})
}

db.run(query, values, afterInsertData)

    
})



//rota search
server.get("/search",(req,res)=>{

    const search = req.query.search
    if(search == ""){
        //pesquisa vazia
        return res.render("search.html",{ total: 0 })
    }
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
//db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length
        console.log("Aqui estão seus registros")
        console.log(rows)

        //mostrar a página html com os dados do banco de dados
        return res.render("search.html",{places:rows,total:total})
})
    })
   

//ligar o servidor
server.listen(3000)
