import { NetworkInterfaceInfoIPv4, UserInfo } from "node:os";

declare module "array-utils" {
    interface OsDetails {
        arch: string;
        hostname: string;
        platform: NodeJS.Platform;
        release: string;
        type: string;
    }

    type UserDetails = UserInfo<string>

    type NetworkInterfacesDetails = NodeJS.Dict<NetworkInterfaceInfoIPv4>
    type EnvDetails = NodeJS.Dict<string>
}