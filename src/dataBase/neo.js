/* json archives */
const baseJson = require('../json/neo.json')

/* servides to push data into an array */
const neoService = require('../services/neoService');

let arr1 = [];

exports.getBaseData = () => {
    let data = JSON.stringify(baseJson);
    let project_object = JSON.parse(data).find(
        projeto => projeto["n"].labels[0] == "Projeto_Funcionario"
    )
    JSON.parse(data).map( employees => {
        arr1 = neoService.projectEmployee(employees, project_object);
    });
    return arr1
};

