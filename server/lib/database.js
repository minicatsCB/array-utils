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
         db.get("data")
           .push(data)
           .write();
    }
}

module.exports = database;
