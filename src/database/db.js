// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar a objeto do banco de dados, para nossas operações
module.exports = db

/*
db.serialize(()=>{
   //Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS  places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            adress TEXT,
            adress2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //inserir dados
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
    "Coletoria",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmbC0fetTvBquwe8hoaBl5-8ARysR6Kv2ndp7jX1QTMpsuoHsG&usqp=CAU",
    "Guilherme Gembala, Jardim America",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
]

function afterInsertData(err){
    if(err){
        return console.log(err)
    }
    console.log("Cadastro com sucesso")
    console.log(this)
}

db.run(query, values, afterInsertData)


    //consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err,rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })
    //Deletar um dado da tabela
   db.run(`DELETE FROM places WHERE id = ?`,[13], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })

})
*/