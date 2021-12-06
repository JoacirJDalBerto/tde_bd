
const connection = require('./conectar')

module.exports = {
    //inserir na tabela funcionario
    async insertFuncionario(req, res) {
        
        const {fno , fnome} = req;
        console.log('req',req)
        const [, affectTows] = await connection.query(
        `INSERT INTO funcionarios VALUES (DEFAULT, ${fno}, '${fnome}', NOW(), NOW()) `)
        return req
    },
    //inserir na tabela projeto
    async insertProjeto(req, res) {
        
        const {pno , orcamento} = req;
        const [, affectTows] = await connection.query(
        `INSERT INTO projetos VALUES (DEFAULT, ${pno}, '${orcamento}', NOW(), NOW()) `)
        return req
    },
    //inserir na tabela cargo
    async insertCargo(req, res) {
        console.log('req',req)
        
        const {cod_cargo , salario, cargo} = req;
        const [, affectTows] = await connection.query(
        `INSERT INTO cargos VALUES (DEFAULT, ${cod_cargo}, ${salario},'${cargo}', NOW(), NOW()) `)
        return req
    },
}


