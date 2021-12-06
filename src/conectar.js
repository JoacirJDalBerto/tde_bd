const Sequelize = require('sequelize')
// cria conecção local
const connection = new Sequelize('projeto_funcionario', 'root', null,{
        host: "localhost",
        dialect: 'mysql'
    })

module.exports = connection;
    