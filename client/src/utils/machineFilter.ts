// TODO: define TS types

function filterIpv4Adresses(machine) {
    let networkInterfaces = machine.networkInterfaces

    let filteredNetworkInterfaces = {}
    for (let intf in networkInterfaces) {
        for (let elem of networkInterfaces[intf]) {
            if (elem.family === 'IPv4') {
                filteredNetworkInterfaces[intf] = elem
            }
        }
    }

    machine.networkInterfaces = filteredNetworkInterfaces
}

function extractIpAddress(intfs) {
    const selectedIntf = Object.keys(intfs).filter(key => (key.includes("Ethernet 2")))[0]
    return intfs[selectedIntf].address
}

export { filterIpv4Adresses, extractIpAddress };