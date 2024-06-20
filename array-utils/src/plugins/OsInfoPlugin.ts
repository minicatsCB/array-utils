import { PluginBase } from "./PluginBase";
import { OsDetails } from "../types/index";
import * as os from "node:os";

export class OsInfoPlugin extends PluginBase {
    constructor() {
        super('os');
    }

    onError(err: any): void {
        console.log("Error while executing child in os:", err);
    }

    getOsDetails(): OsDetails {
        return {
            arch: os.arch(),
            hostname: os.hostname(),
            platform: os.platform(),
            release: os.release(),
            type: os.type()
        };
    }

    run(): OsDetails {
        try {
            return this.getOsDetails();
        } catch (err) {
            this.onError(err);
            return null;
        }
    }
}