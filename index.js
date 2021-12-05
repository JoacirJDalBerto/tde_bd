
const express = require("express")
const app = express();
require('dotenv').config()

app.use(express.json())


const routes = require('./routes')
app.use(routes)

const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address()
const port = 3030

app.listen(port, console.log(`Server started in http://localhost:${port} or ${protocol}:${ip}:${port}`))

app.get("/", (req, res) => {
    res.send("Seja Bem-Vindo");
}); 



 (async () => {
    const neo = require('./src/dataBase/neo');
    const mongo = require('./src/dataBase/mongo');
    const Postagem = require('./src/postagens'); //nome do banco de dados
    try {
        const resultadoneo = await neo.getBaseData();
        const resultadomongo = await mongo.getMongoData();



        //pegando dados do neo e inserindo
        resultadoneo.map(async (data) => {
            await Postagem.insertFuncionario({
                fno: data.projeto_funcionario.funcionario.fno,
                fnome: data.projeto_funcionario.funcionario.fnome
            })
        })
        resultadoneo.map(async (data) => {
            await Postagem.insertProjeto({
                orcamento: data.projeto_funcionario.projeto.orcamento,
                pno: data.projeto_funcionario.projeto.pno
            })
        })
        resultadoneo.map(async (data) => {
            console.log(data)
            await Postagem.insertCargo({
                cod_cargo: data.projeto_funcionario.cargo.cod_cargo,
                salario: data.projeto_funcionario.cargo.salario,
                cargo: data.projeto_funcionario.cargo.cargo
                
            })
        })


        //pegando dados do mongo e inserindo
        resultadomongo.map(async (data) => {
            await Postagem.insertFuncionario({
                fno: data.projeto_funcionario.funcionario.fno,
                fnome: data.projeto_funcionario.funcionario.fnome
            })
        })
        resultadomongo.map(async (data) => {
            await Postagem.insertProjeto({
                orcamento: data.projeto_funcionario.projeto.orcamento,
                pno: data.projeto_funcionario.projeto.pno
            })
        })



        /* inserçoes no banco
        const func = await Postagem.insertFuncionario({
            fno: 1,
            fnome: 'ana'
        })
        const proj = await Postagem.insertProjeto({
            pno: 2,
            fnome: 'ana'
        })
        const carg = await Postagem.insertCargo({
            fno: 7,
            fnome: 'ana'
        })
        */
        

 
        //console.log(func);
        //console.log(proj);
        //console.log(carg);
        //console.log(resultadoneo);
        //console.log(resultadomongo);

    } catch (error) {
        console.log(error);
    }
})();
