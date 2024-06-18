const database = require("./database");

let controller = {
    getData: database.getData,
    getDataById: database.getDataById,
    saveData: database.saveData
}

module.exports = controller;
