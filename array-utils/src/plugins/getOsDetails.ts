import { OsDetails } from "array-utils";
import * as os from "node:os";

module.exports = function(): OsDetails {
    return {
        arch: os.arch(),
        hostname: os.hostname(),
        platform: os.platform(),
        release: os.release(),
        type: os.type()
    };
}
