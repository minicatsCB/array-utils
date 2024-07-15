import { OsDetails } from "../../types/index.js";
import * as os from "node:os";
import { EnumerationPlugin } from "../EnumerationPlugin.js";

export class OsInfoPlugin extends EnumerationPlugin {
    constructor() {
        super('os');
    }

    mapData(): OsDetails {
        return {
            arch: os.arch(),
            hostname: os.hostname(),
            platform: os.platform(),
            release: os.release(),
            type: os.type()
        };
    }

    getOsDetails(): OsDetails {
        return this.mapData();
    }

    run(): OsDetails {
        try {
            return this.getOsDetails();
        } catch (err) {
            this.onError.call(this, err);
            return null;
        }
    }
}