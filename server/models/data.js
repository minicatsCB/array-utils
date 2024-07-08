import { JSONFilePreset  } from "lowdb/node";
const defaultData = { machines: [] }
const db = await JSONFilePreset('database/db.json', defaultData)

let database = {
    getData: function() {
        return db.data.machines;
    },
    getDataById: function(id) {
        return db.data.machines.find(m => m.id === id);
    },
    saveData: async function(data, pluginType, machineId) {
        const foundMachine = database.getDataById(machineId);
        if(foundMachine) {
            foundMachine[pluginType] = data;
            await db.write();
        } else {
            db.data.machines.push({ id: machineId, [pluginType]: data })
            await db.write();
        }
    },
}

export default database;
