import * as os from "node:os";
import { UserDetails } from "array-utils";

module.exports = function(): UserDetails {
    return os.userInfo()
}
