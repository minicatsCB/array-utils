import { PluginBase } from "./PluginBase";
import { NetworkInterfacesDetails } from "../types/index";
import * as os from "node:os";
import { getIpv4Interfaces } from "../utils";


export class NetworkInfoPlugin extends PluginBase {
    constructor() {
        super('networkInterfaces');
    }

    run(): NetworkInterfacesDetails {
        return getIpv4Interfaces(os.networkInterfaces());
    }
}