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
    generateHash: function (str) {
        return crypto.createHash("md5").update(str).digest("hex");
    }
}

module.exports = utils;
