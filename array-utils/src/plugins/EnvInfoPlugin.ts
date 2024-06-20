import { PluginBase } from "./PluginBase";
import { EnvDetails } from "../types/index";

export class EnvInfoPlugin extends PluginBase {
    constructor() {
        super('env');
    }

    onError(err: any): void {
        console.log("Error while executing child in env:", err);
    }

    getEnvInfo(): EnvDetails {
        return process.env;
    }

    run(): EnvDetails {
        try {
            return this.getEnvInfo();
        } catch (err) {
            this.onError(err);
            return null;
        }
    }
}
