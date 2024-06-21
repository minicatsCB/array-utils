import { PluginBase } from "../PluginBase";
import { NetworkDetails } from "../../types/index";
import * as os from "node:os";
import { NetworkInterfaceInfo } from "node:os"



export class NetworkInfoPlugin extends PluginBase {
    constructor() {
        super('networkInterfaces');
    }

    mapNetworkInfo(network: NodeJS.Dict<NetworkInterfaceInfo[]>): Array<NetworkDetails> {
        const mappedNetworkInfo: Array<NetworkDetails> = [];

        for (const ifaceName in network) {
            const assignedNetworksAdresses = network[ifaceName];
            for (const address of assignedNetworksAdresses) {
                if (address.family === "IPv4") {
                    mappedNetworkInfo.push({
                        ifaceName: ifaceName,
                        address: address.address,
                        netmask: address.netmask,
                        cidr: address.cidr,
                        family: address.family,
                        mac: address.mac,
                        internal: address.internal
                    });
                }
            }
        }

        return mappedNetworkInfo;
    }

    getNetworkInfo(): Array<NetworkDetails> {
        return this.mapNetworkInfo(os.networkInterfaces());
    }

    run(): Array<NetworkDetails> {
        try {
            return this.getNetworkInfo();
        } catch (err) {
            this.onError.call(this, err);
            return null;
        }
    }
}

new NetworkInfoPlugin().run();