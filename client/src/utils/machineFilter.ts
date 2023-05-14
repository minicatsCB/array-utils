
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
    const disallowedIntf = 'lo'
    const filteredName = Object.keys(intfs).filter(key => !(key === disallowedIntf))[0]

    return intfs[filteredName].address
}

export { filterIpv4Adresses, extractIpAddress };