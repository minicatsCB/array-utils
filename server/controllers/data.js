const DataModel = require('../models/data');

const data = {
    getData: function(req, res) {
        const data = DataModel.getData();
        res.sendData(data);
    },
    getDataById: function(req, res) {
        const data = DataModel.getDataById(req.params.id);
        res.sendData(data);
    },
    saveData: function(req, res) {
        let pluginType = req.header("X-Plugin-Name");
        let machineId = req.header("X-Machine-Id");
        console.log(`Data from plugin '${pluginType}' received successfully.`);
        DataModel.saveData(req.body, pluginType, machineId);
        res.sendData(null);
    },
}

module.exports = data;