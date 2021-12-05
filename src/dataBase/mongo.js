/* json archive */
const mongoJson = require('../json/mongo.json');

/* service to push data into an array */
const mongoService = require('../services/mongoService');

let arr2 = [];
exports.getMongoData = () => {
    let data = JSON.stringify(mongoJson);
    
    JSON.parse(data).map( employees => {
       arr2 = mongoService.projectMongoEmployee(employees);
    })
    return arr2;
}
