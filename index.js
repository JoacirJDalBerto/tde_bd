
const express = require("express")
const app = express();
require('dotenv').config()

app.use(express.json())

const protocol = 'http'
const ip = require('ip').address()
const port = 3030

app.listen(port, console.log(`Server started in http://localhost:${port} or ${protocol}:${ip}:${port}`))

app.get("/", (req, res) => {
    res.send("Seja Bem-Vindo");
}); 

//inserir no banco principal
 (async () => {
    const neo = require('./src/dataBase/neo');
    const mongo = require('./src/dataBase/mongo');
    const Postagem = require('./src/postagens'); //nome do banco de dados
    try {
        const DataNeo = await neo.getNeoData();
        const DataMongo = await mongo.getMongoData();


        //pegando dados do neo e inserindo
        DataNeo.map(async (data) => {
            await Postagem.insertFuncionario({
                fno: data.projeto_funcionario.funcionario.fno,
                fnome: data.projeto_funcionario.funcionario.fnome
            })
        })
        DataNeo.map(async (data) => {
            await Postagem.insertProjeto({
                orcamento: data.projeto_funcionario.projeto.orcamento,
                pno: data.projeto_funcionario.projeto.pno
            })
        })
        DataNeo.map(async (data) => {
            console.log(data)
            await Postagem.insertCargo({
                cod_cargo: data.projeto_funcionario.cargo.cod_cargo,
                salario: data.projeto_funcionario.cargo.salario,
                cargo: data.projeto_funcionario.cargo.cargo
                
            })
        })


        //pegando dados do mongo e inserindo
        DataMongo.map(async (data) => {
            await Postagem.insertFuncionario({
                fno: data.projeto_funcionario.funcionario.fno,
                fnome: data.projeto_funcionario.funcionario.fnome
            })
        })
        DataMongo.map(async (data) => {
            await Postagem.insertProjeto({
                orcamento: data.projeto_funcionario.projeto.orcamento,
                pno: data.projeto_funcionario.projeto.pno
            })
        })


    } catch (error) {
        console.log(error);
    }
})();
