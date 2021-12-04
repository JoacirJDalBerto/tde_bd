
let arr1 = [];

//Armazena dentro do array o projeto funcionario
exports.projectEmployee = (employees, project_object ) => {
    let result = {};
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
    return arr1;
}