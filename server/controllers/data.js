const DataModel = require('../models/data');

const data = {
    getData: function(req, res) {
        const data = DataModel.getData();
        res.send(data);
    },
    getDataById: function(req, res) {
        const data = DataModel.getDataById(Number(req.params.id));
        res.send(data);
    },
    saveData: function(req, res) {
        let pluginType = req.header("X-Plugin-Name");
        let machineId = req.header("X-Machine-Id");
        let msg = `Data from plugin '${pluginType}' received successfully.`;
        console.log(msg);
        DataModel.saveData(req.body, pluginType, machineId);
        res.status(200).send(msg);
    },
}

module.exports = data;