/*http://localhost:8081/sobre*/
const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Seja Bem-Vindo");
});

/* endpoints */
require('./routes')(app);


/* database? need changes */
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

app.listen(3000, () => {
    console.log("Servidor Rodando na url http://localhost:3000")
});
