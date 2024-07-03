const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database/db.json');
const db = low(adapter);

// Set some defaults (required if the JSON file is empty)
db.defaults({ data: [] }).write();

let database = {
    getData: function() {
        return db.get("data").value();
    },
    getDataById: function(id) {
        return db.get("data").find({"id": id}).value();
    },
    saveData: function(data, pluginType, machineId) {
        if(database.machineExists(machineId)) {
              db.get("data")
                .find({ id: machineId })
                .assign({ [pluginType]: data })
                .write();

            console.log("Record for this machine already exists. Updating data...");
        } else {
            db.get("data")
              .push({ id: machineId, [pluginType]: data })
              .write();

            console.log("No record for this machine found. Creating new record...");
        }
    },
    machineExists: function(id) {
        return db.get("data")
            .find({ id: id })
            .value();
    }
}

module.exports = database;
