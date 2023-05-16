import { NetworkInterfacesDetails } from "array-utils";
import * as os from "node:os";
import * as ut from "../lib/utils"

module.exports = function(): NetworkInterfacesDetails {
    return ut.getIpv4Interfaces(os.networkInterfaces());
}
