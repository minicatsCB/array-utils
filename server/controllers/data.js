import DataModel from '../models/data.js';
import { validationResult } from 'express-validator';

const data = {
    getData: function(req, res) {
        const data = DataModel.getData();
        res.sendData(data); // TODO: if data is undefined, send fail with status code 404
    },
    getDataById: function(req, res) {
        const data = DataModel.getDataById(req.params.id);
        res.sendData(data);
    },
    saveData: async function(req, res) {
        const result = validationResult(req);
        if (result.isEmpty()) {
            let pluginType = req.header("X-Plugin-Name");
            let machineId = req.header("X-Machine-Id");
            await DataModel.saveData(req.body, pluginType, machineId);
            return res.sendData(null);
        }
        res.sendFail(result.array());
    },
}

export default data;