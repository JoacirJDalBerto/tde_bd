const baseJson = require('../json/base1neo4j2.json');
const mongoJson = require('../json/projetoFuncionarioMongo.json');
let arr1 = [];
let arr2 = [];

exports.getBaseData = () => {
    let data = JSON.stringify(baseJson);
    let result = {};
    let project_object = JSON.parse(data).find(
        projeto => projeto["n"].labels[0] == "Projeto_Funcionario"
    )
    JSON.parse(data).map( employees => {
        /* iterando cargos, projetos, funcionarios */
        switch (employees["n"].labels[0]) {
            case "Cargo":
                result = {
                    projeto_funcionario: {
                        identity: project_object["n"].identity,
                        id: project_object["n"].properties.id,
                        cargo: {
                            cod_cargo: employees["n"].properties.cod_cargo,
                            cargo: employees["n"].properties.cargo,
                            salario: employees["n"].properties.salario,
        
                        }
                    }
                }
                arr1.push(result);
                break;
            case "funcionario":
                result = {
                    projeto_funcionario: {
                        identity: project_object["n"].identity,
                        id: project_object["n"].properties.id,
                        funcionario: {
                            fnome: employees["n"].properties.fnome,
                            fno: employees["n"].properties.fno
                        }
                    }
                }
                arr1.push(result);
                break;
            case "projeto":
                result = {
                    projeto_funcionario: {
                        identity: project_object["n"].identity,
                        id: project_object["n"].properties.id,
                        projeto: {
                            orcamento: employees["n"].properties.orcamento,
                            pno: employees["n"].properties.pno
                        }
                    }
                }
                arr1.push(result);
                break;
        }
    });
    return arr1;
};

exports.getMongoData = () => {
    let data = JSON.stringify(mongoJson);
    let result = {};
    
    JSON.parse(data).map( employees => {

        if (employees["projeto"]) {
            result = {
                projeto_funcionario: {
                    projeto: {
                        id: employees["_id"]["$oid"],
                        pno: employees["projeto"][0].pno,
                        orcamento: employees["projeto"][0].orcamento
                    }
                }
            }
            arr2.push(result);
        }
        if (employees["Funcionario"]) {
            result = {
                projeto_funcionario: {
                    funcionario: {
                        id: employees["_id"]["$oid"],
                        fno: employees["Funcionario"][0].fno,
                        fnome: employees["Funcionario"][0].fnome
                    }
                }
            }
            arr2.push(result);
        }
        
    })
    return arr2;
}
