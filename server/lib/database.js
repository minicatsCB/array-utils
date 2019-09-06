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

         db.get("data")
           .push({ id: utils.generateHash(macAddress), os: data.os, env: data.env })
           .write();
    }
}

module.exports = database;
