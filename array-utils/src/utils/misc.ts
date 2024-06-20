import * as crypto from "node:crypto"
import { NetworkInterfaceInfo, NetworkInterfaceInfoIPv4 } from "node:os"

export function generateRandomId(): string {
    return crypto.randomBytes(8).toString("hex");
}

export function getIpv4Interfaces(networkIfaces: NodeJS.Dict<NetworkInterfaceInfo[]>): NodeJS.Dict<NetworkInterfaceInfoIPv4>
 {
    let ipv4OnlyIfaces: NodeJS.Dict<NetworkInterfaceInfoIPv4> = {}
    for(let ifaceName in networkIfaces) {
        let filteredResult = networkIfaces[ifaceName]?.filter(i => i.family === "IPv4")[0] as NetworkInterfaceInfoIPv4;
        ipv4OnlyIfaces[ifaceName] = filteredResult
    }

    return ipv4OnlyIfaces;
}