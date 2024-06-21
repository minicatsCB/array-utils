import { PluginBase } from "./PluginBase";
import { EnvDetails } from "../types/index";

export class EnvInfoPlugin extends PluginBase {
    constructor() {
        super('env');
    }

    getEnvInfo(): EnvDetails {
        return process.env;
    }

    run(): EnvDetails {
        try {
            return this.getEnvInfo();
        } catch (err) {
            this.onError.apply(this, err);
            return null;
        }
    }
}
