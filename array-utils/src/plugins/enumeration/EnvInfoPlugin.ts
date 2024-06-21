import { PluginBase } from "../PluginBase";
import { EnvDetails } from "../../types/index";

export class EnvInfoPlugin extends PluginBase {
    constructor() {
        super('env');
    }

    mapEnvDetails(env: NodeJS.ProcessEnv): EnvDetails {
        return {
            path: env.PATH,
            home: env.HOME,
            user: env.USER || env.USERNAME,
            pwd: env.PWD,
            shell: env.SHELL,
            lang: env.LANG || env.LANGUAGE,
        };
    }

    getEnvInfo(): EnvDetails {
        return this.mapEnvDetails(process.env);
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