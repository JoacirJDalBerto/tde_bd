const Sequelize = require('sequelize')
const ModelNeo = require('./dataBase/neo')
const ModelMongo = require('./dataBase/mongo')




const connection = new Sequelize('projeto_funcionario', 'root', null,{
        host: "localhost",
        dialect: 'mysql'
    })
/*
let x = ModelNeo.getBaseData();
let y = ModelMongo.getMongoData();
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log(x)
console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
console.log(y)
console.log("------------xxxxxxxxx-------------------------")


x.map(data=>{
    console.log(data.projeto_funcionario)
})

console.log("--------------yyyyyyyy--------------------")


y.map(data=>{
    console.log(data.projeto_funcionario)
})


*/
/*
const Postagem = sequelize.define('Postagem',{
    id_cargo: {
        type: Sequelize.FLOAT
    },
    cargo_f: {
        type: Sequelize.STRING
    },
    salario_f: {
        type: Sequelize.STRING
    }
})

Postagem.sync({force: true})

    sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao se contectar: "+erro)
    })

    //map(data => {})
    //npx sequelize-cli db:migrate
*/


module.exports = connection;
    