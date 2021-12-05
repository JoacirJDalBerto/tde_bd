/* const Sequelize = require('sequelize');
const database = require('./conectar');

const postagens = database.define('postagens',{
    id.
}) */
const responseModel = {
    success:false,
    data:[],
    error:[]
}

const connection = require('./conectar')

module.exports = {
    async insertFuncionario(req, res) {
        const response = {...responseModel}
        const {fno , fnome} = req;
        console.log('req',req)
        const [, affectTows] = await connection.query(
        `INSERT INTO funcionarios VALUES (DEFAULT, ${fno}, '${fnome}', NOW(), NOW()) `)
        return req
    },
    async insertProjeto(req, res) {
        const response = {...responseModel}
        const {pno , orcamento} = req;
        const [, affectTows] = await connection.query(
        `INSERT INTO projetos VALUES (DEFAULT, ${pno}, '${orcamento}', NOW(), NOW()) `)
        return req
    },
    async insertCargo(req, res) {
        console.log('req',req)
        const response = {...responseModel}
        const {cod_cargo , salario, cargo} = req;
        const [, affectTows] = await connection.query(
        `INSERT INTO cargos VALUES (DEFAULT, ${cod_cargo}, ${salario},'${cargo}', NOW(), NOW()) `)
        return req
    },
    async busc(req, res) {
        const response = {...responseModel}
        const {fno , fnome} = req.body;
        const [, data] = await connection.query(
        `SELECT * FROM createtables `)
        console.log(data)
        return res.json(response)
    }
}


