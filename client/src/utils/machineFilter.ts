// TODO: define TS types

import type { NetworkInterfacesDetails } from "./models"

function extractIpAddress(intfs: NetworkInterfacesDetails) {
    const selectedIntf = Object.keys(intfs).filter(key => (key.includes("Ethernet 2")))[0]
    return intfs[selectedIntf].address
}

export { extractIpAddress };