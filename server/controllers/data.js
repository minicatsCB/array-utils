const DataModel = require('../models/data');
const { validationResult } = require('express-validator');

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
        const result = validationResult(req);
        if (result.isEmpty()) {
            let pluginType = req.header("X-Plugin-Name");
            let machineId = req.header("X-Machine-Id");
            DataModel.saveData(req.body, pluginType, machineId);
            return res.sendData(null);
        }
        res.sendFail(result.array());
    },
}

module.exports = data;