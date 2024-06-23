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
        // TODO: extract validation to middleware. Hint: use express-validator
        if (!pluginType) {
            return res.sendFail({'X-Plugin-Name': "Please provide 'X-Plugin-Name' header."});
        }

        let machineId = req.header("X-Machine-Id");
        if (!machineId) {
            return res.sendFail({'X-Machine-Id': "Please provide 'X-Machine-Id' header."});
        }
        DataModel.saveData(req.body, pluginType, machineId);
        res.sendData(null);
    },
}

module.exports = data;