

const jsonpesquisa = require('./base1neo4j2.json'); //vc ta jogando uma consulta pra uam variavel.
let pesquisa = jsonpesquisa.filter((object) => object.n.identity == 147); //aqui vc pesquisa, veja bem vc ta fazendo um filter e passando o identity 147
console.log(pesquisa); //use muito console,log ele é o debug do node
if(pesquisa.length > 0){
    pesquisa = pesquisa[0].n;
    console.log(pesquisa.properties)
    console.log(`O cargo é ${pesquisa.properties.cod_cargo} e ${pesquisa.properties.cargo} e ${pesquisa.properties.salario} `);  
}