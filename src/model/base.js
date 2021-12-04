/* json archives */
const baseJson = require('../json/base1neo4j2.json')

/* servides to push data into an array */
const baseService = require('../services/baseService');

let arr1 = [];

exports.getBaseData = () => {
    let data = JSON.stringify(baseJson);
    let project_object = JSON.parse(data).find(
        projeto => projeto["n"].labels[0] == "Projeto_Funcionario"
    )
    JSON.parse(data).map( employees => {
        arr1 = baseService.projectEmployee(employees, project_object);
    });
    return arr1
};

