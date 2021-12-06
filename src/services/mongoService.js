let arr2 = [];
//tratamento do json
exports.projectMongoEmployee = (employees) => {
    let result = {};
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
    if (employees["funcionario"]) {
        result = {
            projeto_funcionario: {
                funcionario: {
                    id: employees["_id"]["$oid"],
                    fno: employees["funcionario"][0].fno,
                    fnome: employees["funcionario"][0].fnome
                }
            }
        }
        arr2.push(result);
    }
    return arr2;
}