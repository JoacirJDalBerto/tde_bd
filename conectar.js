const Sequelize = require('sequelize')
const sequelize = new Sequelize('buscadados', 'root', '571234@H',{
        host: "localhost",
        dialect: 'mysql'
    })
    
const Postagem = sequelize.define('postagens',{
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