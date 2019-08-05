const database = require("./database");

let controller = {
    getData: database.getData,
    saveData: database.saveData
}

module.exports = controller;
