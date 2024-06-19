import * as os from "node:os";
import { UserDetails, OsDetails, NetworkInterfacesDetails, EnvDetails } from "./typings";
import { getIpv4Interfaces } from "./utils";

abstract class Plugin {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }

    abstract run(): any;

    getName(): string {
        return this.name;
    }
}

class UserInfoPlugin extends Plugin {
    constructor() {
      super("userInfo");
    }
  
    run(): UserDetails {
      return os.userInfo();
    }
}

class OsInfoPlugin extends Plugin {
    constructor() {
        super('os');
    }

    run(): OsDetails {
        return {
            arch: os.arch(),
            hostname: os.hostname(),
            platform: os.platform(),
            release: os.release(),
            type: os.type()
        };
    }
}

class NetworkInfoPlugin extends Plugin {
    constructor() {
        super('networkInterfaces');
    }

    run(): NetworkInterfacesDetails {
        return getIpv4Interfaces(os.networkInterfaces());
    }
}

class EnvInfoPlugin extends Plugin {
    constructor() {
        super('env');
    }

    run(): EnvDetails {
        return process.env;
    }
}

export const plugins: Array<Plugin> = [new NetworkInfoPlugin(), new OsInfoPlugin(), new EnvInfoPlugin(), new UserInfoPlugin()];