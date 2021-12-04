const Sequelize = require('sequelize')
const Models_base = require('./Date_bases/base')
const sequelize = new Sequelize('buscadados', 'root', '571234@H',{
        host: "localhost",
        dialect: 'mysql'
    })

let x = Models_base.getBaseData();
console.log(x)
x.map(data=>{
    console.log(data.projeto_funcionario)
})
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

module.exports = Postagem;
/*Postagem.sync({force: true})*/

    sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao se contectar: "+erro)
    })

    //map(data => {})
    //npx sequelize-cli db:migrate