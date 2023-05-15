const crypto = require("crypto");

let utils = {
    getMacAddress: function (ifaces) {
        for(iface in ifaces) {
            for(address of ifaces[iface]) {
                if (!address.internal) {
                    if (address.mac) {
                        return address.mac;
                    }
                }
            }
        }
    },
    generateId: function (ifaces) {
        let macAddress = utils.getMacAddress(ifaces);
        return crypto.createHash("md5").update(macAddress).digest("hex");
    }
}

module.exports = utils;
