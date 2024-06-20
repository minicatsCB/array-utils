import { PluginBase } from "./PluginBase";
import { EnvDetails } from "../types/typings";


export class EnvInfoPlugin extends PluginBase {
    constructor() {
        super('env');
    }

    run(): EnvDetails {
        return process.env;
    }
}
