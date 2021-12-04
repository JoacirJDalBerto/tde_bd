/*http://localhost:8081/sobre*/
const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Seja Bem-Vindo");
});

app.get("/sobre/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

/* (async () => {
    const database = require('./db');
    const Postagem = require('./buscadados'); //nome do banco de dados
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();
 */

app.listen(8081, () => {
    console.log("Servidor Rodando na url http://localhost:8081")
});
