const os = require("os");

module.exports = function() {
    return {
        arch: os.arch(),
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release(),
        type: os.type()
    };
}
