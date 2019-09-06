const utils = require("./utils");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database/db.json');
const db = low(adapter);

// Set some defaults (required if the JSON file is empty)
db.defaults({ data: [] }).write();

let database = {
    getData: function() {
        console.log("Getting data from database...");
        return db.get("data").value();
    },
    saveData: function(data) {
        console.log("Writing data to database...");
        if(data.os) {
            // Use the MAC adress to use it as the computer ID
            let ifaces = data.os.networkInterfaces;
            macAddress = utils.getMacAddress(ifaces);
        }

        let id = utils.generateHash(macAddress);

        if(database.machineExists(id)) {
            let key = Object.keys(data)[0];
              db.get("data")
                .find({ id: id })
                .assign({ [key]: data[key]})
                .write();

            console.log("Record for this machine already exists. Updating data...");
        } else {
            db.get("data")
              .push({ id: id, os: data.os, env: data.env })
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
