import { EnvDetails } from "../../types/index.js";
import { EnumerationPlugin } from "../EnumerationPlugin.js";

export class EnvInfoPlugin extends EnumerationPlugin {
    constructor() {
        super('env');
    }

    mapData(env: NodeJS.ProcessEnv): EnvDetails {
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
        return this.mapData(process.env);
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