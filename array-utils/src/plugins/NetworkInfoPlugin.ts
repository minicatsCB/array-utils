import { PluginBase } from "./PluginBase";
import { NetworkInterfacesDetails } from "../types/index";
import * as os from "node:os";
import { NetworkInterfaceInfo, NetworkInterfaceInfoIPv4 } from "node:os"



export class NetworkInfoPlugin extends PluginBase {
    constructor() {
        super('networkInterfaces');
    }

    onError(err: any): void {
        console.log("Error while executing child in networkInterfaces:", err);
    }

    getIpv4Interfaces(networkIfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): NodeJS.Dict<NetworkInterfaceInfoIPv4> {
        let ipv4OnlyIfaces: NodeJS.Dict<NetworkInterfaceInfoIPv4> = {}
        for (let ifaceName in networkIfaces) {
            let filteredResult = networkIfaces[ifaceName]?.filter(i => i.family === "IPv4")[0] as NetworkInterfaceInfoIPv4;
            ipv4OnlyIfaces[ifaceName] = filteredResult
        }

        return ipv4OnlyIfaces;
    }

    getNetworkInfo(): NetworkInterfacesDetails {
        return this.getIpv4Interfaces(os.networkInterfaces());
    }

    run(): NetworkInterfacesDetails {
        try {
            return this.getNetworkInfo();
        } catch (err) {
            this.onError(err);
            return null;
        }
    }
}